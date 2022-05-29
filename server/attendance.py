import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="mansi0403",
  database="faceRecognition"
)

path= 'images'
image = []
classNames = []
myList = os.listdir(path)
print(myList)
for cls in myList:
    currentImage = cv2.imread(f'{path}/{cls}')
    image.append(currentImage)
    classNames.append(os.path.splitext(cls)[0])
print(classNames)

def findEncodings(image):
    encodeList = []
    for img in image:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList

mycursor = mydb.cursor()

def markAttendance(name):
    with open('Attendance.csv','r+') as f:
        myDataList = f.readlines()
        nameList = []
        for line in myDataList:
            entry = line.split(',')
            nameList.append(entry[0])
        if name not in nameList:
            now = datetime.now()
            dtString = now.strftime('%H:%M:%S')
            sql = "INSERT INTO students (fullname, intime) VALUES (%s, %s)"
            val = (name, dtString)
            mycursor.execute(sql, val)
            mydb.commit()
            print(mycursor.rowcount, "record inserted.")
            f.writelines(f'\n{name},{dtString}')



enCodeListKnown = findEncodings(image)
print('Encoding complete')

#initialize web cam
cap = cv2.VideoCapture(0)

while True:
    success,img = cap.read()
    imgSmall = cv2.resize(img,(0,0),None,0.25,0.25)
    imgSmall = cv2.cvtColor(imgSmall, cv2.COLOR_BGR2RGB)
    #if multiple images
    facesCurrentFrame = face_recognition.face_locations(imgSmall)
    encodeCurrentFrame = face_recognition.face_encodings(imgSmall, facesCurrentFrame)

    #find matches
    for encodeFace, faceLocation in zip(encodeCurrentFrame,facesCurrentFrame):
        matches = face_recognition.compare_faces(enCodeListKnown,encodeFace)
        faceDistance = face_recognition.face_distance(enCodeListKnown,encodeFace)
        # print(faceDistance)
        matchIndex = np.argmin(faceDistance)

        if matches[matchIndex]:
            name= classNames[matchIndex].upper()
            # print(name)
            y1,x2,y2,x1= faceLocation
            y1,x2,y2,x1= y1*4,x2*4,y2*4,x1*4

            cv2.rectangle(img,(x1,y1),(x2,y2),(0,255,0),2)
            cv2.rectangle(img,(x1,y2-35),(x2,y2),(0,255,0),cv2.FILLED)
            cv2.putText(img,name,(x1+6,y2-6),cv2.FONT_HERSHEY_COMPLEX,1,(255,255,255),2)
            markAttendance(name)

    cv2.imshow('Webcam',img)
    cv2.waitKey(1)

