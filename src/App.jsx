import './App.css';
import OneSignal from 'react-onesignal';
import { useEffect } from 'react';

function App() {
  // async function runOneSignal() {
  //   await OneSignal.init({
  //     appId: '2aa9bcf7-257d-4bd1-b89f-a0b16d71c9df',
  //     allowLocalhostAsSecureOrigin: true
  //   });
  //   // OneSignal.Slidedown.promptPush();
  // }
  useEffect(() => {
    // runOneSignal()
    OneSignal.init({
      appId: '39f81043-635e-441e-80a3-ed09c8e4b81b'
    });
  }, [])
  // window.OneSignal = window.OneSignal || [];
  // const OneSignal = window.OneSignal;
  // window.OneSignalDeferred = window.OneSignalDeferred || [];

  // useEffect(() => {
 
  //   OneSignal.sendTags({key: "value", key2: "value2"});

  //   OneSignal.push((e) => {
  //     OneSignal.init(
  //       {
  //         appId:"2aa9bcf7-257d-4bd1-b89f-a0b16d71c9df",
  //         promptOptions: {
  //           slidedown: {
  //             enabled: true,
  //             actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
  //             acceptButtonText: "OMG YEEEEESS!",
  //             cancelButtonText: "NAHHH",
  //             categories: {
  //               tags: [
  //                 {
  //                   tag: "react",
  //                   label: "ReactJS",
  //                 },
  //                 {
  //                   tag: "angular",
  //                   label: "Angular",
  //                 },
  //                 {
  //                   tag: "vue",
  //                   label: "VueJS",
  //                 },
  //                 {
  //                   tag: "js",
  //                   label: "JavaScript",
  //                 }
  //               ]
  //             }
  //           }
  //         },
  //         welcomeNotification: {
  //           "title": "One Signal",
  //           "message": "Thanks for subscribing!",
  //         }
  //       },
  //       OneSignal.User.addTag("js", "1")

  //       /**Automatically subscribe to the new_app_version tag */
  //       // OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
  //       //   // Callback called when tag has finished sending
  //       //   console.log('new_app_version TAG SENT', tagsSent);
  //       // })
  //     );
  //   });


  //   // OneSignalDeferred.push(function(OneSignal) {
  //   //   OneSignal.init({
  //   //     appId: "2aa9bcf7-257d-4bd1-b89f-a0b16d71c9df",
  //   //     safari_web_id: "web.onesignal.auto.445d0d2a-d94a-41a6-9db5-6271b7cfba3f",
  //   //     notifyButton: {
  //   //       enable: true,
  //   //     },
  //   //   });
  //   // });
  // }, []);


  const OnHandleTag = (tag) => {
    // console.log("tag = ",tag);
      OneSignal.sendTag(tag, 1).then(()=>{
        console.log("tag = ",tag);
      })
  }

  return (
    <>
      <h1>One Signal - React DEMO</h1>
      <button onClick={()=>OnHandleTag('js')}>js</button>
      <button onClick={()=>OnHandleTag('angular')}>angular</button>

    </>
  );
}

export default App;
