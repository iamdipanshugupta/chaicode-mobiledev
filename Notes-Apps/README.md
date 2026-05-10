# Notes App UI - React Native

A clean and responsive Notes App UI built using React Native with Expo.

This project was created as part of the Mobile Development Cohort assignment to practice React Native core components, responsive layouts, dark/light themes, and clean UI design.

---

# Features

## View 1 - Notes Listing Screen
- Display notes using FlatList
- Search notes using TextInput
- Responsive note cards
- Dark/Light mode toggle
- Pressable note cards
- Date and content preview

## View 2 - Note Editor Screen
- Edit note title
- Multiline note content input
- KeyboardAvoidingView support
- ImageBackground header
- Save and Back buttons using Pressable

---

# React Native Components Used

- View
- Text
- FlatList
- TextInput
- Pressable
- Switch
- SafeAreaView
- ScrollView
- KeyboardAvoidingView
- ImageBackground

---

# Hooks Used

- useState
- useMemo
- useColorScheme
- useWindowDimensions

---

# Features Implemented

## Dark / Light Theme
Used `useColorScheme()` for automatic system theme detection and implemented manual dark mode toggle.

## Responsive Layout
Used `useWindowDimensions()` to create responsive layouts for:
- Mobile devices
- Tablets
- Different screen sizes

## Styling
- All styling created using `StyleSheet.create()`
- Used:
  - `StyleSheet.compose()`
  - `StyleSheet.flatten()`

---

# Additional UI Improvements

- Modern card-based layout
- Rounded UI components
- Clean spacing and typography
- Responsive grid layout on tablets
- Smooth dark mode support
- Professional note editor layout

---

# Project Structure

```txt
App.js