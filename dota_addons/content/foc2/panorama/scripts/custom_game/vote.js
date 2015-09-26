function CheckForHostPrivileges(panel)
{
	var playerInfo = Game.GetLocalPlayerInfo();
	if ( !playerInfo )
		return undefined;

	// Set the "player_has_host_privileges" class on the panel, this can be used 
	// to have some sub-panels on display or be enabled for the host player.
	$.GetContextPanel().SetHasClass( "player_has_host_privileges", playerInfo.player_has_host_privileges );
	if (panel !== undefined) {
		panel.SetHasClass( "player_has_host_privileges", playerInfo.player_has_host_privileges );
	}
	return playerInfo.player_has_host_privileges;

}

function OnLockPressed()
{

	GameEvents.SendCustomGameEventToServer("host_lock_option", {})
	$( "#LockOption" ).visible	 = false
}