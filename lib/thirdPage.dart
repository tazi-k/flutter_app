import 'package:flutter/material.dart';

class ThirdPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("計算してやるよ！"),
      ),
      body: Row(
        children: [
          Spacer(),
          Expanded(
            child: TextField(
            ),
          ),
          Spacer(),
          Expanded(
            child: TextField(
              ),
          ),
          Spacer(),
          Expanded(
            child: TextField(
            ),
          ),
          Spacer(),
        ],
      ),
    );
  }
}
