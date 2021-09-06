<!DOCTYPE html>

<html class=''  ng-app="WCApp">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 

<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'>
<link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css'>
<link rel='stylesheet prefetch' href='/css/common.css'/>
<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
</head>

<body ng-controller="chatCtrl" ng-init="init('{{USER_ID}}', '{{USER_IMG}}', '{{USER_LANG_TYPE}}', '{{USER_NAME}}')">
<div id="frame">
	<div id="sidepanel">
    <div id="profile">
		<div class="wrap">
			<img id="profile-img" src="{{USER_IMG}}" class="online" alt="" ng-click="openStatus()" />
			<p>{{USER_NAME}}</p>
			<i class="fa fa-chevron-down expand-button" aria-hidden="true" ng-click="expandBtn()"></i>
			<div id="status-options">
				<ul>
					<li id="status-online" class="active" ng-click="changeStatus('online')"><span class="status-circle"></span><p style="margin-top: 3px;">Online</p></li>
					<li id="status-away" ng-click="changeStatus('away')"><span class="status-circle"></span> <p style="margin-top: 3px;">Away</p></li>
					<li id="status-busy" ng-click="changeStatus('busy')"><span class="status-circle"></span> <p style="margin-top: 3px;">Busy</p></li>
					<li id="status-offline" ng-click="changeStatus('offline')"><span class="status-circle"></span> <p style="margin-top: 3px;">Offline</p></li>
				</ul>
			</div>
			<div id="expanded">
				<lable for="logout"><a href="logout.do">LogOut</a></lable>
			</div>
		</div>
	</div>
	<div id="search">
		<label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
		<input type="text" placeholder="Search contacts..." />
	</div>
	<div id="contacts">
		<ul>
			<li class="contact" ng-repeat="chat in chatList">
				<div class="wrap">
					<span class="contact-status online"></span>
					<img src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
					<div class="meta">
						<p class="name">Louis Litt</p>
						<p class="preview">You just got LITT up, Mike.</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
		<div id="bottom-bar">
			<button id="addcontact"><i class="fa fa-user-plus fa-fw" aria-hidden="true"></i> <span>Add contact</span></button>
			<button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
		</div>
	</div>
	<div class="content">
		<div class="contact-profile">
			<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			<p>Harvey Specter</p>
			<div class="social-media">
				<i class="fa fa-facebook" aria-hidden="true"></i>
				<i class="fa fa-twitter" aria-hidden="true"></i>
				 <i class="fa fa-instagram" aria-hidden="true"></i>
			</div>
		</div>
		<div class="messages">
			<ul>
				<li class="sent">
					<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
					<p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
				</li>
				<li class="replies">
					<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
					<p>When you're backed against the wall, break the god damn thing down.</p>
				</li>
				<li class="replies">
					<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
					<p>Excuses don't win championships.</p>
				</li>
				<li class="sent">
					<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
					<p>Oh yeah, did Michael Jordan tell you that?</p>
				</li>
				<li class="replies">
					<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
					<p>No, I told him that.</p>
				</li>
				<li class="replies">
					<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
					<p>What are your choices when someone puts a gun to your head?</p>
				</li>
				<li class="sent">
					<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
					<p>What are you talking about? You do what they say or they shoot you.</p>
				</li>
				<li class="replies">
					<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
					<p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
       			</li>
			</ul>
		</div>
		<div class="message-input">
			<div class="wrap">
				<input type="text" placeholder="Write your message..." />
				<i class="fa fa-paperclip attachment" aria-hidden="true"></i>
				<button class="submit" ng-click="newMessage()"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
	</div>
</div>
<script src="/vendor/jquery/jquery.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src='/socket.io/socket.io.js'></script>
<script src="/js/angular_1.6.9.min.js"></script>

<script>    
  "use strict";
  const socket = io();
  var mainApp = window.mainApp || (window.mainApp = angular.module("WCApp", []));
  mainApp.controller("chatCtrl", function($scope){
      $scope.init = function(userId, userImg, langtype, name){
          $scope.userInfo = {
			  id : userId,
			  img : userImg,
			  langtype : langtype,
			  name : name
		  };
          $scope.flag = false;
          $scope.setEvent();
      };
      $scope.setEvent = function(){
        $(".messages").animate({ scrollTop: $(document).height() }, "fast");

        $(window).on('keydown', function(e) {
          if (e.which == 13) {
            $scope.newMessage();
            return false;
          }
        });

        socket.on('chat message', (obj) => {
          if(obj.id != $scope.userInfo.id) {
            appendMsg(obj.msg);
          }
        });

      };
      $scope.appendMsg = function(msg){
        $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + msg + '</p></li>').appendTo($('.messages ul'));
        $('.message-input input').val(null);
        $('.contact.active .preview').html('<span>You: </span>' + msg);
        $(".messages").animate({ scrollTop: $(document).height() }, "fast");
      };

      $scope.newMessage = function() {
        var message = $(".message-input input").val();
        if($.trim(message) == '') {
          return false;
        }
        socket.emit('chat message', {msg: message, id: $scope.userInfo.id});
        $('<li class="replies"><img src="'+ $scope.userInfo.img +'" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
        $('.message-input input').val(null);
        $('.contact.active .preview').html('<span>You: </span>' + message);
        $(".messages").animate({ scrollTop: $(document).height() }, "fast");
      };

      $scope.changeStatus = function(status){
		$("#profile-img").removeClass();
		$("#status-online").removeClass("active");
		$("#status-away").removeClass("active");
		$("#status-busy").removeClass("active");
		$("#status-offline").removeClass("active");
		$("#status-options ul li").addClass("active");
		$("#profile-img").addClass(status);
		$("#status-options").removeClass("active");
      };

      $scope.expandBtn = function(){
        $scope.flag = ($scope.flag == true) ? false : true;
        if($scope.flag) {
          $("#profile").addClass("expanded");
          $("#contacts").addClass("expanded")
        } else {
          $("#profile").removeClass("expanded");
          $("#contacts").removeClass("expanded")
        }
      };

	  $scope.openStatus = function(){
		$("#status-options").toggleClass("active");
	  }
    });
</script>
</body>
</html>