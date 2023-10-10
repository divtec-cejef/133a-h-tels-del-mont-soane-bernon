/**
* @author      Soane Bernon <steve.fallet@divtec.ch>
* @version     1.0
* @since       2023-10-10
*
* http://usejsdoc.org/
*/

"use strict";
console.log("salut mec");
/**
 * Retourne le nom de l'hotel sélectionné par le visiteur
 * @returns {String} Nom de l'hotel ou "0" si pas de sélection
 */
function getHotel() {
    const hotel = document.getElementById('list_hotels');
    const selectedHotel = hotel.value;
    if (hotel.value === "-- Sélectionnez un hôtel --")
        return "0";
    return selectedHotel;
}


/**
 * Retourne le nombre de chambres saisi par le visiteur
 * @returns {Number} Nombre de chambres ou NaN (Not A Number)
 */
function getNbChambre() {
    const nombreChambres = document.getElementById('nbrChambre').value;
    return parseInt(nombreChambres) || NaN;
}


/**
 * Retourne le type de chambre sélectionné ou ""
 * @returns {String} Type de chambre ou ""
 */
function getChambre() {
    const typeChambre = document.getElementsByName('tchambre');
    for (let i = 0; i < typeChambre.length; i++) {
        if (typeChambre[i].checked) {
            return typeChambre[i].value;
        }
    }
    return "";
}


/**
 * Retourne les options choisies par le visiteur
 * @returns {Array} Tableau des éléments checkbox cochés
 */
function getOptions() {
    const optionsCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    return Array.from(optionsCheckbox).map(option => option.name);
}


/**
 * Valide la saisie utilisateur
 * Retourne un message d'erreur au format HTML "<ul><li>erreur 1</li>..</ul>"
 * ou chaine vide si tout est OK..
 *
 * @returns {String}    Chaine vide si pas d'erreur ou <ul> d'erreurs
 */
function valideSaisie() {

}

/**
 * Affiche la confirmation de réservation
 */
function afficheConfirmation() {

}

/**
 * Fonction appellé lors de l'envoi du formulaire
 * Test la saisie et affiche la confirmation ou le message d'erreur
 * @param event Objet représentant l'événement
 */
function reserver(event) {

}
