var boards = {
	index: function()
	{
		turtl.controllers.pages.load(new BoardsController({}));
	},

	view: function(board)
	{
		board = null;
		if(!turtl.profile || !turtl.profile.profile_data)
		{
			turtl.controllers.pages.trigger('loaded');
			return;
		}
		turtl.controllers.pages.load(new BoardsViewController({
			current_board: board
		}));
	}
};
