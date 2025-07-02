import "package:flutter/material.dart";

class ThemeProvider with ChangeNotifier {
  bool isDark = false,
  book get isDarkMode=>isDark;

  ThemeMode get themeMode=>isDark?ThemeMode.dark:ThemeMode.light;
  void ToggleTheme(){
    isDark=!isDark;
    ChangeNotifier();
  }
}