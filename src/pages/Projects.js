// IMPORT =========================================================================================
import React from 'react';
import './Projects.scss';

// EXPORT =========================================================================================
export default function Projects() {
  return(
    <div className='row section scrollspy' id='secPort'>
      <div className='portfolio col s12 center'>
        
        {/* Portfolio Header */}
        <h3> Portfolio </h3>

        {/* Word Guess Game  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/wordGuess.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='wordGuess'> Word Guess Game </div>
            <a className='deployed' href='https://lmboyle.github.io/wordGuessGame' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/wordGuessGame' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>
        
        {/* RPG  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/starWars.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='rpg'> Star Wars RPG </div>
            <a className='deployed' href='https://lmboyle.github.io/starWarsRPG' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/starWarsRPG' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Triva Game  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/simpsons.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='triva'> Simpsons Triva Game </div>
            <a className='deployed' href='https://lmboyle.github.io/simpsonsTrivia' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/simpsonsTrivia' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Gifs  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/giftastic.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='gifs'> GifTastic </div>
            <a className='deployed' href='https://lmboyle.github.io/gifTastic/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/gifTastic' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Rock Paper Scissors  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/rps.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='rps'> Rock Paper Scissors </div>
            <a className='deployed' href='https://lmboyle.github.io/rpsMultiplayer' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/rpsMultiplayer' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Sports Now  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/sportsNow.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='sportsNow'> Sports Now </div>
            <a className='deployed' href='https://lmboyle.github.io/sportsNow' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/sportsNow' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Liri Bot  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/liriBot.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='liri' style={{left:'-71px'}}> Liri Bot </div>
            <a className='code' href='https://github.com/LMBoyle/liriBot' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Node Word Guess  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/nodeWord.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='nodeWord' style={{left:'-71px'}}> Node Word Guess </div>
            <a className='code' href='https://github.com/LMBoyle/constructorWordGuess' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Bamazon  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/bamazon.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='bamazon' style={{left:'-71px'}}> Bamazon </div>
            <a className='code' href='https://github.com/LMBoyle/bamazon' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Friend Finder  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/friendFinder.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='friendFind'> Friend Finder </div>
            <a className='deployed' href='https://friend-finder-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/friendFinder' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Eat Da Burger  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/eatdaburger.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='eatdaburger'> Eat Da Burger </div>
            <a className='deployed' href='https://eatdaburger-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/burger' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Eat Da Burger Sequel */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/eatdaburgersequel.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='eatdaburgersequel'> Eat Da Burger Sequel</div>
            <a className='deployed' href='https://eatdaburgersequel-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/burgerSequel' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Death By Docs  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/deathbydoc.png' />
          <div className='imgButtons'>
            <div className='imgText' id='newsScraper'> Death By Documents </div>
            <a className='deployed' href='https://deathbydoc-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/deathByDocuments' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* News Scraper  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/newsScraper.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='newsScraper'> News Scraper </div>
            <a className='deployed' href='https://newsscraper-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/newsScraper' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Clicky Game  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/clickyGame.jpeg' />
          <div className='imgButtons'>
            <div className='imgText' id='newsScraper'> Clicky Game </div>
            <a className='deployed' href='https://lmboyle.github.io/clickyGame/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/clickyGame' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Google Books  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/googleBooks.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='googleBooks'> Google Books </div>
            <a className='deployed' href='https://googlebookssearch-lmb.herokuapp.com/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/googleBooksSearch' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>

        {/* Cheapo  */}
        <div className='imgContain'>
          <img alt='project thumbnail' className='portImg' src='assets/img/cheapo.jpg' />
          <div className='imgButtons'>
            <div className='imgText' id='cheapo'> Cheapo </div>
            <a className='deployed' href='https://cheapo-lmk.herokuapp.com/' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-rocket' data-tooltip='Deployed'></i></div></a>
            <a className='code' href='https://github.com/LMBoyle/cheapo' target='_blank' rel='noreferrer'><div className='imgIcons'><i className='fas fa-code' data-tooltip='Code'></i></div></a>
          </div>
        </div>
      
      </div>
    </div>
  )
}
