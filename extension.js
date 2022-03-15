// const Clutter = imports.gi.Clutter;
const St = imports.gi.St;
const Main = imports.ui.main;
const Mainloop = imports.mainloop;
const GLib = imports.gi.GLib;

let panelButton, panelButtonText, timeout;

function setButtonText () {
    var [ok, out, err, exit] = GLib.spawn_command_line_sync('date');
    //precisa do replace, se não fica uma linha em branco em baixo da data
    panelButtonText.set_text( out.toString().replace('\n', '') );
    return true;
}

function init () {
    panelButton = new St.Bin({
        style_class : "panel-button",
    });
    panelButtonText = new St.Label({
        style_class : "exemplePanelText",
        text : "Mayrinha detonando",
        // y_align: Clutter.ActorAlign.CENTER,
    });
    panelButton.set_child(panelButtonText);
}

function enable () {
    Main.panel._rightBox.insert_child_at_index(panelButton, 1);
    timeout = Mainloop.timeout_add_seconds(1.0, setButtonText);
}

function disable () {
    Mainloop.source_remove(timeout);
    Main.panel._rightBox.remove_child(panelButton);
}