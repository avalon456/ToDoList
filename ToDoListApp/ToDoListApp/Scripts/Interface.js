function Throw_Message(mesText, alertType)
{
    new Noty({
        theme: 'metroui',
        type: alertType,
        text: mesText,
        animation: {
            open: 'animated bounceInRight',
            close: 'animated bounceOutRight' 
        },
        closeWith: [],
        timeout: 3000
    }).show();
}