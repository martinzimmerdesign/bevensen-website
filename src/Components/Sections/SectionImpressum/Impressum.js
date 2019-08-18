import React from 'react';
import anime from 'animejs/lib/anime.es.js';

export default class Impressum extends React.Component {

  componentDidMount() {
        anime({
          targets: ".elements-animate-in_bottom",
          translateY: ["60px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 200})
        });

        anime({
          targets: ".elements-animate-in_left",
          translateX: ["-30px", "0px"],
          opacity: [0, 1],
          easing: "easeOutQuart",
          duration: 800,
          delay: anime.stagger(100, {start: 800})
        });
    }

render(){
  return(
    <div class="content_section_parent">
        <h1 class="elements-animate-in_bottom">Impressum</h1>

          <div class="line elements-animate-in_bottom"></div>

<div class="elements-animate-in_left">
<p><strong>Gemeinschaftspraxis</strong><br />Dr. med. Katja Grahl<br />Dr. med. Stephan Braun<br />Dr. med. Axel Pflugradt<br />MVZ - Dannenberg</p>
<p>R&ouml;mstedter Stra&szlig;e 25<br />29549 Bad Bevensen<br />Tel.: 0 58 21 - 96 77 93<br />Fax.: 0 58 21 - 96 77 92<br />E-Mail:&nbsp;<a href="mailto:info@gefaesspraxis-bevensen.de">info@gefaesspraxis-bevensen.de</a><br />Internet: www.gefaesspraxis-bevensen.de</p>
<p><strong>Zust&auml;ndige Aufsichtsbeh&ouml;rde:</strong><br />Kassen&auml;rztliche Vereinigung Niedersachsen<br />Bezirksstelle L&uuml;neburg<br />J&auml;gerstra&szlig;e 5<br />21339 L&uuml;neburg</p>
<p><strong>Zust&auml;ndige Kammer:</strong><br />&Auml;rztekammer Niedersachsen<br />Bezirksstelle L&uuml;neburg<br />J&auml;gerstra&szlig;e 5<br />21339 L&uuml;neburg</p>
<p><strong>Berufsbezeichnung:</strong><br />Dr. K. Grahl: &Auml;rztin, Fach&auml;rztin f&uuml;r Innere Medizin, Angiologie<br />Dr. S. Braun: Arzt, Facharzt f&uuml;r Chirurgie, Gef&auml;&szlig;chirurgie<br />(verliehen in der BRD)</p>
<p><strong>Berufsrechtliche Regelungen:</strong><br />-&gt; Berufsordnung der&nbsp;<a href="http://www.aekn.de/" target="_blank" rel="noopener">&Auml;rztekammer Niedersachsen</a><br />-&gt; Heilberufegesetz des Landes Niedersachsen</p>
<p><strong>Hinweis:</strong><br />Wir &uuml;bernehmen keine Haftung f&uuml;r den Inhalt externer Links.<br />F&uuml;r den Inhalt sind ausschlie&szlig;lich deren Betreiber verantwortlich.</p>
<p><strong>Design &amp; Programmierung</strong><br />Martin Zimmer Design<br /><a href="mailto:info@it42.gmbh">m.zimmer.business@gmail.com</a><br /><a class="website" href="https://martinzimmer.design/" target="_blank" rel="noopener">martinzimmer.design</a></p>
<h3>Haftungsausschluss:</h3>
<p><strong>Haftung f&uuml;r Inhalte</strong></p>
<p>Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt. F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen. Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
<p><strong>Haftung f&uuml;r Links</strong></p>
<p>Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
<p><strong>Urheberrecht</strong></p>
<p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Sofern Inhalte von Dritten stammen, wurden vom Betreiber dieser Seite f&uuml;r den jeweiligen Verwendungszweck eine Lizenz erworben oder der jeweilige Urheber hat sich mit der Ver&ouml;ffentlichung seiner Werke auf dieser Seite einverstanden erkl&auml;rt. Das Urheberrecht liegt beim jeweiligen Autor. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet, falls der Autor nicht auf eine Kennzeichnung verzichtet hat. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
<p class="smallText">Das Copyright im Rahmen dieser Publikation ver&ouml;ffentlichter Inhalte bleibt allein beim Autor dieser Seiten und dem Urheber der Fotografien und darf ohne derer Zustimmung nicht verwendet werden.</p>
</div>
</div>
      );
  }
}
