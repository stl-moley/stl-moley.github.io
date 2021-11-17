<?php
// Sécurité
class Securite
	{
		// Données entrantes
		public static function bdd($string)
		{
			// On regarde si le type de string est un nombre entier (int)
			if (ctype_digit($string))
			{
				$string = intval($string);
			}
			// Pour tous les autres types
			else
			{
				$string = addcslashes($string, '%_');
			}
			return $string;
		}
		// Données sortantes
		public static function html($string)
		{
			return htmlentities($string);
		}
	}
// Vérification
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
// Récupération des variables et sécurisation des données
$nom       = Securite::bdd($_POST['nom']);
$prenom    = Securite::bdd($_POST['prenom']);
$structure = Securite::bdd($_POST['structure']);
$sujet     = Securite::bdd($_POST['sujet']);
$email     = Securite::bdd($_POST['email']);
$message   = Securite::bdd($_POST['message']);
}
// Email du destinataire
$destinataire = 'estelle.moley@gmail.com';
// Contenu de l'email
$contenu = 'Vous avez reçu un message de ' . $prenom . ' ' . $nom .  ', de : ' . $structure . ' dont l\'adresse mail est : ' . $email . '. ce message concerne : ' . $sujet . ', et sa demande est la suivante : ' . $message . '.';
// Envoi email	
mail($destinataire, $sujet, $contenu);
// Message pour indiquer que le message a été envoyé 
//echo '<p class="ok">Votre message a bien été envoyé.</p>'; 

header('Location: merci-mail.html');
