
function writer_helper(){ }//End of writer_helper constructor

writer_helper.prototype.paragraph = function( num ){

	var element_string = '<div class="row element_box" id="element_post_' + num + '"><div class="col-md-9" id="left_element_post_' + num + '"><textarea class="paragraph_app" class="autoExpand" cols="50" placeholder="Párrafo"></textarea></div><div class="col-md-3 element_tools" id="right_element_post_' + num + '"><i class="fa fa-plus tool_element"></i><i class="fa fa-times tool_element"></i></div></div>';

	return element_string;

};//End of paragraph generator function
