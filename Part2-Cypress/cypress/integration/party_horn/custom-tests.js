describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    var slider = cy.get("#volume-slider");
    slider.then( ($el) => {
      expect($el).to.have.value(75);
    } );
  });

  it('volume input changes when Slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    //cy.get('#volume-number').clear().type('75');
    var num = cy.get("#volume-number");
    num.then( ($el) => {
      expect($el).to.have.value(33);
    } );
  });

  it('volume audio changes when Slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    //cy.get('#volume-number').clear().type('75');
    var audio = cy.get("#horn-sound");
    audio.then( ($el) => {
      expect($el).to.have.prop("volume", 0.33);
    } );
  });

  /********************* */
  it('Test if the image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').check();
    //cy.get('#volume-number').clear().type('75');
    var image = cy.get("#sound-image");
    image.then( ($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    } );
  });

/** */
  it('Test if the volume image changes when increasing volumes (you must test for all 3 cases)', () => {
    cy.get('#volume-number').clear().type('35');
    var volume = cy.get("#volume-image");
    volume.then( ($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-2.svg");
    } );   

    cy.get('#volume-number').clear().type('3');
    volume = cy.get("#volume-image");
    volume.then( ($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-1.svg");
    } );

    cy.get('#volume-number').clear().type('0');
    volume = cy.get("#volume-image");
    volume.then( ($el) => {
      expect($el).to.have.attr("src", "./assets/media/icons/volume-level-0.svg");
    } );
  })


  /*** */
  it('Test if the honk button is disabled when the textbox input is a empty or a non-number', () => {
    // empty
    cy.get('#volume-number').clear();
    var button = cy.get("#honk-btn");
    button.then( ($el) => {
      expect($el).to.have.attr("disabled");
    } );
    // non number
    cy.get('#volume-number').clear().type('str');
    button = cy.get("#honk-btn");
    button.then( ($el) => {
      expect($el).to.have.attr("disabled");
    } );
    
  })


  it('Test if an error is shown when you type a number outside of the given range for the volume textbox input', () => {
    cy.get('#volume-number').clear().type('1000');
    var invalid = cy.get('input:invalid');
    invalid.then( ($el) => {
      expect($el).to.have.attr('id', 'volume-number');
    } );

    cy.get('#volume-number').clear().type('-10');
    var invalid = cy.get('input:invalid');
    invalid.then( ($el) => {
      expect($el).to.have.attr('id', 'volume-number');
    } );
    
  })

});
