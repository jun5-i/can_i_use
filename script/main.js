(function () {
  var wrapper = document.getElementById('wrap')
  var getDevice = (function () {
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
  })()
  if (getDevice === 'sp' || getDevice === 'tab') {
    wrapper.classList.add('responsive')
  } else {
    wrapper.addEventListener('click', function () {
      wrapper.classList.toggle('direction-column')
    })
  }

  var config = {
    apiKey: 'AIzaSyACfLujsYsFYQKBn0ow3-nqVVyLgKGSToc',
    authDomain: 'upft-toilet.firebaseapp.com',
    databaseURL: 'https://upft-toilet.firebaseio.com',
    projectId: 'upft-toilet',
    storageBucket: 'upft-toilet.appspot.com',
    messagingSenderId: '966196255224',
  }
  firebase.initializeApp(config)
  var db = firebase.firestore()
  db.collection('items')
    .doc('room01')
    .onSnapshot(
      {
        // Listen for document metadata changes
        includeMetadataChanges: true,
      },
      function(doc) {
        if (doc.data().open_status == 0) {
          document.getElementById('room01').classList.add('using')
        } else {
          document.getElementById('room01').classList.remove('using')
        }
      },
    )
  db.collection('items')
    .doc('room02')
    .onSnapshot(
      {
        // Listen for document metadata changes
        includeMetadataChanges: true,
      },
      function(doc) {
        if (doc.data().open_status == 0) {
          document.getElementById('room02').classList.add('using')
        } else {
          document.getElementById('room02').classList.remove('using')
        }
      },
    )
})()