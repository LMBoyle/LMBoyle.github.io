// IMPORT =========================================================================================
import React from 'react';

// EXPORT =========================================================================================
export default function Projects() {
  return(
    <div class='row section scrollspy' id='secPort'>
      <div class='portfolio col s12 center'>
        
        {/* Portfolio Header */}
        <h3> Portfolio </h3>

        {/* Word Guess Game  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/wordGuess.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='wordGuess'> Word Guess Game </div>
            <a class='deployed' href='https://lmboyle.github.io/wordGuessGame' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/wordGuessGame' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>
        
        {/* RPG  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/starWars.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='rpg'> Star Wars RPG </div>
            <a class='deployed' href='https://lmboyle.github.io/starWarsRPG' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/starWarsRPG' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Triva Game  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/simpsons.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='triva'> Simpsons Triva Game </div>
            <a class='deployed' href='https://lmboyle.github.io/simpsonsTrivia' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/simpsonsTrivia' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Gifs  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/giftastic.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='gifs'> GifTastic </div>
            <a class='deployed' href='https://lmboyle.github.io/gifTastic/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/gifTastic' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Rock Paper Scissors  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/rps.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='rps'> Rock Paper Scissors </div>
            <a class='deployed' href='https://lmboyle.github.io/rpsMultiplayer' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/rpsMultiplayer' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Sports Now  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/sportsNow.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='sportsNow'> Sports Now </div>
            <a class='deployed' href='https://lmboyle.github.io/sportsNow' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/sportsNow' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Liri Bot  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/liriBot.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='liri' style={{left:'-71px'}}> Liri Bot </div>
            <a class='code' href='https://github.com/LMBoyle/liriBot' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Node Word Guess  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/nodeWord.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='nodeWord' style={{left:'-71px'}}> Node Word Guess </div>
            <a class='code' href='https://github.com/LMBoyle/constructorWordGuess' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Bamazon  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/bamazon.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='bamazon' style={{left:'-71px'}}> Bamazon </div>
            <a class='code' href='https://github.com/LMBoyle/bamazon' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Friend Finder  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/friendFinder.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='friendFind'> Friend Finder </div>
            <a class='deployed' href='https://friend-finder-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/friendFinder' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Eat Da Burger  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/eatdaburger.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='eatdaburger'> Eat Da Burger </div>
            <a class='deployed' href='https://eatdaburger-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/burger' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Eat Da Burger Sequel */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/eatdaburgersequel.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='eatdaburgersequel'> Eat Da Burger Sequel</div>
            <a class='deployed' href='https://eatdaburgersequel-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/burgerSequel' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Death By Docs  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/deathbydoc.png' />
          <div class='imgButtons'>
            <div class='imgText' id='newsScraper'> Death By Documents </div>
            <a class='deployed' href='https://deathbydoc-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/deathByDocuments' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* News Scraper  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/newsScraper.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='newsScraper'> News Scraper </div>
            <a class='deployed' href='https://newsscraper-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/newsScraper' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Clicky Game  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/clickyGame.jpeg' />
          <div class='imgButtons'>
            <div class='imgText' id='newsScraper'> Clicky Game </div>
            <a class='deployed' href='https://lmboyle.github.io/clickyGame/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/clickyGame' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Google Books  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/googleBooks.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='googleBooks'> Google Books </div>
            <a class='deployed' href='https://googlebookssearch-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/googleBooksSearch' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Cheapo  */}
        <div class='imgContain'>
          <img alt='project thumbnail' class='portImg' src='assets/img/cheapo.jpg' />
          <div class='imgButtons'>
            <div class='imgText' id='cheapo'> Cheapo </div>
            <a class='deployed' href='https://cheapo-lmk.herokuapp.com/' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a class='code' href='https://github.com/LMBoyle/cheapo' target='_blank' rel='noreferrer'><div class='imgIcons'><i class='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>
      
      </div>
    </div>
  )
}
