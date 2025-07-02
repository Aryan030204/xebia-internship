// import 'package:flutter/material.dart';
// import 'package:provider/provider.dart';
// import 'user_provider.dart';
// import 'home.dart';

// class LoginScreen extends StatelessWidget {
//   final formkey=GlobalKey<FormState>();
//   final usernameController = TextEditingController();
//   final passwordController = TextEditingController();

//   void login(BuildContext context){
//     if(formkey.currentState!.validate()){
//       String username = usernameController.text.trim();
//       Provider.of<UserProvider>(context, listen: false).setUserName(username){
//         Navigator.pushReplacement(context, MaterialPageRoute(builder: (_) => HomeScreen())),

//       }
//     }
//   }
// }

// @override

// Widget build(BuildContext context) {
//   return Scaffold(
//     appBar: AppBar(
//       title: Text('Login'),
//     ),
//     body: Padding(padding: const EdgeInsets.all(24) )
//     child: Form(key: formkey,child: Column(
//       children: [
//         TextFormField(
//           controller: usernameController,
//           decoration: InputDecorator(labelText: 'username'),
//           validator: (value) {
//             if (value == null || value.isEmpty) {
//               return 'Enter username';
//             }else{
//               return null;
//             }
//           },
//           SizedBox(height: 16),
//           TextFormField(
//             controller: passwordController, obscureText: true,
//             decoration: InputDecoration(labelText: 'password'),
//             validator: (value) {
//               if (value == null || value.isEmpty) {
//                 return "enter password";
//               }else{
//                 return null;
//               }
//             },
//             SizedBox(height: 24),
//             ElevatedButton(onPressed: () => login(context), child: Text("login"))
//           )
//         )
//       ]
//     ))
//   );
// }

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'user_provider.dart';
import 'home.dart';

class LoginScreen extends StatelessWidget {
  final GlobalKey<FormState> formkey = GlobalKey<FormState>();
  final TextEditingController usernameController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  void login(BuildContext context) {
    if (formkey.currentState!.validate()) {
      String username = usernameController.text.trim();
      Provider.of<UserProvider>(context, listen: false).SetUsername(username);
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (_) => HomeScreen()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Form(
          key: formkey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormField(
                controller: usernameController,
                decoration: InputDecoration(labelText: 'Username'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Enter username';
                  } else {
                    return null;
                  }
                },
              ),
              SizedBox(height: 16),
              TextFormField(
                controller: passwordController,
                obscureText: true,
                decoration: InputDecoration(labelText: 'Password'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Enter password';
                  } else {
                    return null;
                  }
                },
              ),
              SizedBox(height: 24),
              ElevatedButton(
                onPressed: () => login(context),
                child: Text("Login"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
