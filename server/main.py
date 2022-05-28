import cv2
import numpy as np
import face_recognition

imgRonaldo = face_recognition.load_image_file("images/ronaldo.jpg")
imgRonaldo = cv2.cvtColor(imgRonaldo,cv2.COLOR_BGR2RGB)
imgTest = face_recognition.load_image_file("images/ronaldotest.jpg")
imgTest = cv2.cvtColor(imgTest,cv2.COLOR_BGR2RGB)

faceLocation = face_recognition.face_locations(imgRonaldo)[0]
encodeRonaldo = face_recognition.face_encodings(imgRonaldo)[0]
cv2.rectangle(imgRonaldo,(faceLocation[3],faceLocation[0]),(faceLocation[1],faceLocation[2]),(255,0,255),2)

faceLocationTest = face_recognition.face_locations(imgTest)[0]
encodeRonaldoTest = face_recognition.face_encodings(imgTest)[0]
cv2.rectangle(imgTest,(faceLocationTest[3],faceLocationTest[0]),(faceLocationTest[1],faceLocationTest[2]),(255,0,255),2)


cv2.imshow('Ronaldo', imgRonaldo)
cv2.imshow('Ronaldo Test', imgTest)
cv2.waitKey((0))