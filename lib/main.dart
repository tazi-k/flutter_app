import 'package:flutter/material.dart';
import 'package:flutter_app/nextPage.dart';


void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  final title = 'Flutterサンプル';

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      home: new MyHomePage(
        title: this.title,
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({required this.title}) : super();
  final String title;

  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  late String _message;

  @override
  void initState() {
    super.initState();
    _message = 'Hello!';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: Text(
          _message,
          style: TextStyle(fontSize: 32.0),
        ),
        floatingActionButton: ElevatedButton(
          onPressed: () {
            Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => NextPage(),
                )
              );
          },
          child: Text("画像を見たい！"),
        )
      );
  }
}
