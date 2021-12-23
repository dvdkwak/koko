class Speech extends React.Component {

  constructor(props) {
    super(props);
    this.final_transcripts = "";
    this.temporary_transcripts = "";
    this.interval;
  }

  configureSpeech() {
    // @Todo: Find a way to catch the errors here (undefined etc...)
    let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    let SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
    let SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    // the recognition itself
    this.recognition = new SpeechRecognition();
    // this.speechRecognitionList = new SpeechGrammarList();

    // Defining the grammarlist
    // this.speechRecognitionList.addFromString(this.grammar, 1);

    // Configuring the speechrecognition
    this.recognition.continuous = true;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    // Testing calling of this method.
    console.log('speech hook has started!');
  }

  startSpeech() {
    console.log('start listening...');
    this.recognition.start();
    this.recognition.onresult = (event) => {
      for(let i = event.resultIndex; i < event.results.length; i++) {
        if(event.results[i].isFinal) {
          this.final_transcripts = event.results[i][0].transcript;
          // if the transcript starts with a " " clear it
          if(this.final_transcripts.charAt(0) === " ") {
            this.final_transcripts = this.final_transcripts.substring(1);
          }
          console.log("'" + this.final_transcripts + "'");
          if(this.final_transcripts === "listen") {
            console.log('Koko will listen now!');
          }
          if(this.final_transcripts === "stop") {
            console.log('stopping speech recognition');
            this.recognition.stop();
          }
        }
      }
    }
  }

  componentDidMount() {
    this.configureSpeech();
    this.startSpeech();
  }

  render() {
    return(
      <div>
        <h1>I am the speech Component!</h1>
      </div>
    );
  }

}