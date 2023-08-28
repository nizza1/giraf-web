import React from 'react'
import styles from './styles.module.css'
const Dataprotection = () => {
  return (
    <div className={styles.outContainer}>
        <div className={styles.content}>
             <h1>Impressum:</h1>

             <p>
             Angaben gemäß § 5 TMG:
             </p>

             <p>
               
                  GIRAF PM e.K.
                  Rehbachstr. 142
                  D-66125 Saarbruecken
            </p>

             <h1>Kontakt:</h1>

             <p>
             E-Mail: services(at)giraf-pm.com
             Telefon: +49 170 321 8955
             </p>

             <h4>Umsatzsteuer-ID:</h4>

             <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE123456789</p>


            <div className={styles.datapro}>
                <h1>
                Datenschutzerklärung: 
                </h1>

                <p>
                Wir legen großen Wert auf den Schutz Ihrer Daten und die Wahrung Ihrer Privatsphäre. Nachfolgend informieren wir Sie über die Erhebung und Verwendung persönlicher Daten bei Nutzung unserer Webseite.
                </p>

                <h2> Datenverarbeitung beim Besuch der Webseite</h2>
                <p>Beim Besuch unserer Webseite werden keine personenbezogenen Daten von Ihnen gespeichert, sofern Sie uns diese nicht ausdrücklich zur Verfügung stellen.</p>
                <h2> Datenverarbeitung beim Besuch der Webseite</h2>
                <p>Um Ihnen eine ansprechende Darstellung unserer Webseite zu ermöglichen, verwenden wir Schriftarten von Google Fonts, einem Dienst der Google LLC. Die Einbindung dieser Schriftarten erfolgt über Server von Google, wodurch Ihre IP-Adresse an Google übertragen wird. Es wird dabei keine Information über Ihren Besuch auf unserer Webseite gespeichert.</p>

                <p>Weitere Informationen zu Google Fonts und deren Datenschutz finden Sie in der Datenschutzerklärung von Google: https://policies.google.com/privacy</p>

                <p>Bei Fragen zum Datenschutz können Sie sich per E-Mail oder telefonisch  an uns wenden.</p>
            </div>


        </div>
    </div>
  )
}

export default Dataprotection