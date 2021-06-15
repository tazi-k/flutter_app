import 'package:flutter/material.dart';

class NextPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("画面遷移したよ！"),
      ),
      body: Center(
        child: Image.asset('images/PSYCHO-PASS.jpeg'),
      ),
    );
  }
}
