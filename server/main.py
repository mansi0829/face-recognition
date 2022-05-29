import cv2
import numpy as np
import face_recognition

#display image
imgRonaldo = face_recognition.load_image_file("images/ronaldo.jpg")
imgRonaldo = cv2.cvtColor(imgRonaldo,cv2.COLOR_BGR2RGB)
imgTest = face_recognition.load_image_file("images/leena.jpg")
imgTest = cv2.cvtColor(imgTest,cv2.COLOR_BGR2RGB)

#will give top left bottom right location of image and display markings around image
faceLocation = face_recognition.face_locations(imgRonaldo)[0]
encodeRonaldo = face_recognition.face_encodings(imgRonaldo)[0]
cv2.rectangle(imgRonaldo,(faceLocation[3],faceLocation[0]),(faceLocation[1],faceLocation[2]),(255,0,255),2)

faceLocationTest = face_recognition.face_locations(imgTest)[0]
encodeRonaldoTest = face_recognition.face_encodings(imgTest)[0]
cv2.rectangle(imgTest,(faceLocationTest[3],faceLocationTest[0]),(faceLocationTest[1],faceLocationTest[2]),(255,0,255),2)

#to compare ronaldo picture with testing ronaldo
results = face_recognition.compare_faces([encodeRonaldo],encodeRonaldoTest)

#to find percentage of how much the face matches
#the lower the distance the better is the matching of both images
faceDistance = face_recognition.face_distance([encodeRonaldo],encodeRonaldoTest)
print(results,faceDistance)
cv2.putText(imgTest,f'{results}{round(faceDistance[0],2)}',(50,50),cv2.FONT_HERSHEY_COMPLEX,1,(0,0,255),2)

cv2.imshow('Ronaldo', imgRonaldo)
cv2.imshow('Ronaldo Test', imgTest)
cv2.waitKey((0))