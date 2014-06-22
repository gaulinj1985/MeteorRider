/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
phonegapapp = {
  // are we on a phonegap app?
  phonegap: true,
  // are we testing PhoneGap or not?
  test: false,
  // Application Constructor
  initialize: function() {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    document.addEventListener('load', this.onDeviceLoad, false);
  },
  onDeviceLoad: function() {
    alert('load')
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'phonegapapp.receivedEvent(...);'
  onDeviceReady: function() {
    phonegapapp.receivedEvent('deviceready');
    if (this.test) {
      $('phonegapapp-test').show();
    } else {
      phonegapapp.meteorRider();
    }
  },
  // Update DOM on a Received Event
  receivedEvent: function(id) {
    alert(id)
    console.log('Received Event: ' + id);
  },
  // Setup MeteorRider
  meteorRider: function(currentPath) {
    // set 'currentPath' to empty string if not passed
    currentPath = typeof currentPath === 'string' ? currentPath : '';
    MeteorRider.init(currentPath);
  }
};
