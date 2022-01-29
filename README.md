# Clever-todo-list

## Задание:
https://docs.google.com/document/d/1Q_rP2rMNaK0oaT6RcjggMxDDgW-bHhP3nh-41ibaK2o/edit

## Запуск приложения:

1) Установка модулей:
   ### `npm i`
2) Запуск приложения:
   ### `npm run start`


## Используемые библиотеки

* dotenv
* formik
* firebase
* react-router

## БД

В базе данных храняться данные о сущностях user и todo.
В сущности user храняться данные о пользователях(password, username, id, email). 
В сущности todo храняться данные о задачах(date, day, id, month, status, task, time, userId, year)

## Структура папок

В папке src находятся папки:

* assets
* shared
* components
* controls
* utils

### Assets

В этой папке храняться изображения

### Shared

В этой папке храняться общие компоненты

### Components

В этой папке храняться компоненты.
Каждый компонент это папка в которой храняться сам компонент, его стили и интерфейсы

### Controls 

В этой папке храняться контроллеры(кнопки, инпуты и т.д.)

### Utils

Некоторые используемые функции и объекты