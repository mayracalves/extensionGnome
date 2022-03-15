// const Clutter = import.gt.Clutter;
const St = imports.gi.St;
const Main = imports.ui.main;

let panelButton, panelButtonText;

function init () {
    panelButton = new St.Bin({
        style_class : "panel-button",
    });
    let panelButtonText = new St.Label({
        style_class : "exemplePanelText",
        text : "Mayrinha detonando",
        // y_align: Clutter.ActorAlign.CENTER,
    });
    panelButton.set_child(panelButtonText);
}

function enable () {
    Main.panel._rightBox.insert_child_at_index(panelButton, 1);
}

function disable () {
    Main.panel._rightBox.remove_child(panelButton);
}