import 'package:flutter/material.dart';
import 'package:flutter_app/thirdPage.dart';

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
      floatingActionButton: ElevatedButton(
        onPressed: () {
          Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => ThirdPage(),
              ));
        },
        child: Text("計算して欲しい！"),
      ),
    );
  }
}
