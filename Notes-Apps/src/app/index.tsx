import React, { useMemo, useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Switch,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const systemTheme = useColorScheme();

  const [darkMode, setDarkMode] = useState(systemTheme === "dark");

  const { width } = useWindowDimensions();

  const isTablet = width > 768;

  const theme = darkMode ? darkTheme : lightTheme;

  const [search, setSearch] = useState("");

const [notes, setNotes] = useState([
  {
    id: "1",
    title: "React Native",
    content:
      "React Native allows developers to create mobile applications using JavaScript and React.",
    date: "10 May 2026",
  },
  {
    id: "2",
    title: "FlatList",
    content:
      "FlatList is used to efficiently render scrolling lists in React Native applications.",
    date: "09 May 2026",
  },
  {
    id: "3",
    title: "Dark Mode",
    content:
      "Dark mode provides better viewing experience in low light conditions.",
    date: "08 May 2026",
  },
  {
    id: "4",
    title: "JavaScript Arrays",
    content:
      "Arrays are used to store multiple values in a single variable in JavaScript.",
    date: "07 May 2026",
  },
  {
    id: "5",
    title: "Expo CLI",
    content:
      "Expo helps developers build React Native apps faster without complex native setup.",
    date: "06 May 2026",
  },
  {
    id: "6",
    title: "Morning Tasks",
    content:
      "Complete React Native assignment, push code to GitHub, and record demo video.",
    date: "05 May 2026",
  },
  {
    id: "7",
    title: "UI Design Tips",
    content:
      "Use proper spacing, typography, and color contrast to improve user experience.",
    date: "04 May 2026",
  },
  {
    id: "8",
    title: "Backend Learning",
    content:
      "Learn Express.js routing, middleware, and API handling for backend development.",
    date: "03 May 2026",
  },
  {
    id: "9",
    title: "Database Concepts",
    content:
      "Primary keys uniquely identify records inside a database table.",
    date: "02 May 2026",
  },
  {
    id: "10",
    title: "Project Ideas",
    content:
      "Build a weather app, notes app, expense tracker, and chat application for practice.",
    date: "01 May 2026",
  },
]);

  const [selectedNote, setSelectedNote] = useState(null);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, notes]);

  function saveNote() {
    const updatedNotes = notes.map((item) =>
      item.id === selectedNote.id ? selectedNote : item
    );

    setNotes(updatedNotes);

    setSelectedNote(null);
  }

  // =========================
  // VIEW 1 - NOTES LIST SCREEN
  // =========================

  if (!selectedNote) {
    return (
      <SafeAreaView
        style={StyleSheet.compose(styles.container, {
          backgroundColor: theme.background,
        })}
      >
        <StatusBar style={darkMode ? "light" : "dark"} />
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1517842645767-c639042777db",
          }}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.heading}>My Notes</Text>

            <View style={styles.switchRow}>
              <Text style={styles.switchText}>Dark Mode</Text>

              <Switch
                value={darkMode}
                onValueChange={() => setDarkMode(!darkMode)}
              />
            </View>
          </View>
        </ImageBackground>

        <TextInput
          placeholder="Search notes..."
          placeholderTextColor={theme.placeholder}
          value={search}
          onChangeText={setSearch}
          style={[
            styles.searchInput,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />

        <FlatList
          data={filteredNotes}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          numColumns={isTablet ? 2 : 1}
          columnWrapperStyle={
            isTablet && {
              justifyContent: "space-between",
            }
          }
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setSelectedNote(item)}
              style={StyleSheet.flatten([
                styles.noteCard,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                  width: isTablet ? "48%" : "100%",
                },
              ])}
            >
              <Text
                style={[
                  styles.noteTitle,
                  {
                    color: theme.text,
                  },
                ]}
              >
                {item.title}
              </Text>

              <Text
                numberOfLines={2}
                style={[
                  styles.notePreview,
                  {
                    color: theme.subText,
                  },
                ]}
              >
                {item.content}
              </Text>

              <Text
                style={[
                  styles.noteDate,
                  {
                    color: theme.subText,
                  },
                ]}
              >
                {item.date}
              </Text>
            </Pressable>
          )}
        />
      </SafeAreaView>
    );
  }

  // =========================
  // VIEW 2 - NOTE EDITOR SCREEN
  // =========================

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.editorContainer}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
          }}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.heading}>Edit Note</Text>
          </View>
        </ImageBackground>

        <TextInput
          placeholder="Note Title"
          placeholderTextColor={theme.placeholder}
          value={selectedNote.title}
          onChangeText={(text) =>
            setSelectedNote({
              ...selectedNote,
              title: text,
            })
          }
          style={[
            styles.titleInput,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />

        <TextInput
          multiline
          textAlignVertical="top"
          placeholder="Write your note..."
          placeholderTextColor={theme.placeholder}
          value={selectedNote.content}
          onChangeText={(text) =>
            setSelectedNote({
              ...selectedNote,
              content: text,
            })
          }
          style={[
            styles.contentInput,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />

        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.button, styles.saveButton]}
            onPress={saveNote}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.backButton]}
            onPress={() => setSelectedNote(null)}
          >
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const lightTheme = {
  background: "#F5F7FA",
  card: "#FFFFFF",
  text: "#111111",
  subText: "#666666",
  border: "#E2E8F0",
  placeholder: "#999999",
};

const darkTheme = {
  background: "#121212",
  card: "#1E1E1E",
  text: "#FFFFFF",
  subText: "#BBBBBB",
  border: "#333333",
  placeholder: "#888888",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 190,
    justifyContent: "flex-end",
  },

  headerImage: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  heading: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  switchRow: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  switchText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  searchInput: {
    margin: 16,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },

  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  noteCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },

  noteTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  notePreview: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
  },

  noteDate: {
    marginTop: 12,
    fontSize: 13,
  },

  editorContainer: {
    paddingBottom: 40,
  },

  titleInput: {
    margin: 16,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    fontSize: 18,
    fontWeight: "600",
  },

  contentInput: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    minHeight: 250,
    fontSize: 16,
    lineHeight: 24,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 28,
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
  },

  saveButton: {
    backgroundColor: "#4CAF50",
  },

  backButton: {
    backgroundColor: "#E53935",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});