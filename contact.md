---
layout: page
title: "Customer Support"
permalink: /support/
header-title: "Customer Support"
tag-line: "Feel free to contact us in case of any problems or queries"
---


<div class="mt40">
	<form action="https://getsimpleform.com/messages?form_api_token=60f6a3dc8f96bbe167d402e355541dd4" method="post">
		<div class="form-group">
			<label class="control-label">Your Name: </label>
			<input type="text" class="form-control" name="Name" max-length="35" placeholder="John Doe" required>
		</div>
		<div class="form-group">
			<label class="control-label">Your Email: </label>
			<input type="email" class="form-control" name="Email" max-length="35" placeholder="johndoe@mail.com" required>
		</div>
		<div class="form-group">
			<label class="control-label">Product Name: </label>
			<select name="Product" class="form-control">
				{% for post in site.posts %}
					<option value="{{ post.title }}">{{ post.title }}</option>
				{% endfor %}
				<option value="Other">Other</option>
			</select>
		</div>
		<div class="form-group">
			<label class="control-label">Message: </label>
			<textarea style="max-width: 100%;" class="form-control" name="Message" rows="5" required></textarea>
		</div>
		<div class="form-group">
			<input type="hidden" name="redirect_to" value="{{ site.url }}{{ site.baseurl}}/thankyou/" />
			<input class="btn btn-default" type="submit" value="Send Now" />
			<input class="btn btn-default" type="reset" value="Clear" />
		</div>
	</form>
</div>