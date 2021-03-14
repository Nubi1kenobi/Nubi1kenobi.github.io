function()
{
    var d = new Date();
    var n = d.getDay();

    if(n===5)
    {
        var element = document.getElementById("banner")
        element.classList.add("showBanner");
        return;
    }
    else
    {
        var element = document.getElementById("banner")
        element.classList.add("hideBanner");
        return;
    }
}