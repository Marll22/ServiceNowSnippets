executeProcessor();

function executeProcessor() {
    if (!g_processor.canRunAction())
       return;

    var valves =  new GlideappValveProcessor();
    if (valves.beforeProcessor(g_request, g_response, g_processor))
       return; 
	
	
    var a = new ReleaseStoryLineItemVeto(g_request, g_response, g_processor);
    a.execute();
	
}