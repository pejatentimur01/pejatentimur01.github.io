    function fb_share() {
    window.open("https://www.facebook.com/sharer.php?u="+window.location.href+"&text="+document.title ,"","height=368,width=600,left=100,top=100,menubar=0");
    return false;
    };

    function tweeter_share() {
    window.open("https://twitter.com/share?url="+window.location.href,+"&text="+document.title ,"","height=550,width=525,left=100,top=100,menubar=0");
    return false;
    };

    function ig_share() {
    window.open("https:///www.instagram.com/?url="+window.location.href,+"&text="+document.title ,"","height=550,width=525,left=100,top=100,menubar=0");
    return false;
    };
	
	function wa_share() {
    window.open("https://api.whatsapp.com/send?text="+window.location.href+"&text="+document.title ,"","height=260,width=500,left=100,top=100,menubar=0");
    return false;
    };
