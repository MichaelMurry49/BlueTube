# README

# Description
BlueTube is a video hosting website influenced by YouTube's design structure. Users can upload and view other users videos. Videos can only be deleted by the user that posted it.

# Link to Blue Tube
https://blue-tube.herokuapp.com/#/

# Technologies used
1) React
2) Redux
3) Node.js
4) Ruby on Rails
5) Amazon Web Services
6) Herokuapp
7) Git

# Table interactions
1) Users have videos
2) Videos are owned by a user
3) It is mandatory for videos to be owned by a user
4) Videos have comments
5) It is mandatory for comments to be owned by a video
6) Videos have likes (likes may be positive or negative)
7) It is mandatory for likes to be owned by a video
8) Comments have comments
9) It is optional for comments to be owned by a comment
10) Comments have votes (upvotes or downvotes)
11) It is mandatory for votes to be owned by a comment

# Biggest hurdle
Uploading videos
1) I was having issues rendering errors. I solved this by checking if the amazon webservice attachments(upload and thumbnail) were equal to nil. I wrote a different error message for each one being set to nil.
<img width="541" alt="Screen Shot 2020-05-08 at 9 47 27 AM" src="https://user-images.githubusercontent.com/38839723/81428941-e921cf00-9111-11ea-8fa4-3df60172ae6d.png">
  
2) My upload and thumbnail value were not successfully being attached to the video. This was solved by looking deeper into amazon web services and using the formData()
<img width="508" alt="Screen Shot 2020-05-08 at 10 02 13 AM" src="https://user-images.githubusercontent.com/38839723/81429712-0d31e000-9113-11ea-9027-f3936f39610a.png">

Step by step how to upload a video:

1) Click the sign in or demo button on the right of the nav bar
<img width="171" alt="Screen Shot 2020-05-08 at 10 07 38 AM" src="https://user-images.githubusercontent.com/38839723/81430153-d14b4a80-9113-11ea-8938-e6a4df396b94.png">

2) Click the next button once the input fields are filled. You may click the bolded create account text if you do not have an account and do not plan to use the demo user.
<img width="493" alt="Screen Shot 2020-05-08 at 10 18 27 AM" src="https://user-images.githubusercontent.com/38839723/81431115-79154800-9115-11ea-9a5a-346c484a155c.png">

3) Click the Camera icon
<img width="216" alt="Screen Shot 2020-05-08 at 10 21 11 AM" src="https://user-images.githubusercontent.com/38839723/81431242-b1b52180-9115-11ea-9e4d-fde4d59071de.png">

4) Click the Upload Video Button after file selection and inputing the proper inputs
<img width="295" alt="Screen Shot 2020-05-08 at 10 24 16 AM" src="https://user-images.githubusercontent.com/38839723/81431600-3e5fdf80-9116-11ea-97f3-a61a5ae948e9.png">

5) Wait for the Video to load before closing the popup window.

6) The video should now be on the page


# Site Already Supports
User authentication<br/>
Demo login<br/>
Video uploads<br/>
Video index page<br/>
Navigation bar<br/>
Video show page<br/>
Video thumbnails<br/>
Video deletion<br/>
Users can only delete their own videos

# Site Should Eventually support
Video editing<br/>
Video filtering (via search bar)<br/>
Tracking video views<br/>
Commenting on videos<br/>
Liking videos<br/>
Voting on comments<br/>
User profile page/icon
