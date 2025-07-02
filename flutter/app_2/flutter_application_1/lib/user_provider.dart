import 'package:flutter/material.dart';

class UserProvider extends ChangeNotifier {
  String _username = "";
  String get username => _username;
  void SetUsername(String value) {
    _username = value;
    notifyListeners();
  }
}