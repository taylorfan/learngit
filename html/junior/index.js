var HomeTemplate = [
  '<div class="content">',
  ' <header class="junior-intro">',
  '   <h1 class="junior-name"><i class="icon-umbrella"></i> Junior</h1>',
  '   <p>A front-end framework for building html5 mobile apps with a native look and feel.</p>',
  ' </header>',
  ' <ul class="list divider-list"><li class="list-divider">Features</li></ul>',
  ' <div class="carousel-container">',
  '   <ul class="carousel-list">',
  '     <li class="carousel-item native-look-and-feel">',
  '       <summary>Transitions with a native look and feel.</summary>',
  '       <div class="feature-icon"></div>',
  '     </li>',
  '     <li class="carousel-item carousel-content">',
  '       <summary>Carousels using flickable.js</summary>',
  '       <i class="icon-picture"></i>',
  '     </li>',
  '     <li class="carousel-item backbone-content">',
  '       <summary>Integrated with Backbone.js</summary>',
  '       <div class="feature-icon"></div>',
  '     </li>',
  '   </ul>',
  ' <div class="carousel-navigation-container">',
  '   <ul class="carousel-navigation"><li class="active" data-index="0"></li><li data-index="1"></li><li data-index="2"></li></ul>',
  ' </div>',
  ' </div>',
  ' <div class="button-positive button-block show-more-button">Show me more!</div>',
  '</div>'
].join('\n');
var HomeView = Jr.View.extend({
  render: function() {
    this.$el.html(HomeTemplate);
    this.afterRender();
    return this;
  },
  afterRender: function() {
    this.setUpCarousel();
  },
  setUpCarousel: function() {
    var after = function() {
      this.$('.carousel-list').flickable({
        segments: 3
      });
    };
    setTimeout(after, 1);
  },

  events: {
    'click .show-more-button': 'onClickShowMoreButton',
    'onScroll .carousel-list': 'onScrollCarousel',
    'click .carousel-navigation li': 'onClickCarouselNavigationItem'
  },
  onClickShowMoreButton: function() {
    Jr.Navigator.navigate('ratchet', {
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.LEFT
      }
    });
    return false;
  },

  onScrollCarousel: function() {
    var index = this.$('.carousel-list').flickable('segment');
    this.$('.carousel-navigation li').removeClass('active');
    this.$('.carousel-navigation li[data-index="' + index + '"]').addClass('active');
  },

  onClickCarouselNavigationItem: function(e) {
    var index = $(e.currentTarget).attr('data-index');
    this.$('.carousel-list').flickable('segment', index);
  }

});
var RatchetTemplate = [
  '<header class="bar-title">',
  ' <div class="header-animated">',
  '   <div class="button-prev">Back</div>',
  '   <h1 class="title">Ratchet CSS</h1>',
  '   <div class="button-next">Next</div>',
  '</header>',
  '<div class="content ratchet-content">',
  ' <p>Jr. was inspired by Ratchet and pulls in their gorgeous styles.</p>',
  ' <p>Here are some examples:</p>',
  ' <div class="ratchet-examples">',
  '  <ul class="list inset">',
  '   <li>',
  '     <a href="#">',
  '       List item 1',
  '       <span class="chevron"></span>',
  '       <span class="count">4</span>',
  '     </a>',
  '   </li>',
  '  </ul>',
  '  <div class="button-block button-main">Block button</div>',
  '  <a class="button ff">Mini</a> <a class="button-main">buttons</a> <a class="button-positive">are</a> <a class="button-negative">awesome!</a>',
  '  <div class="toggle active example-toggle"><div class="toggle-handle"></div></div>',
  '  <div class="example-cnts"><span class="count">1</span><span class="count-main">2</span><span class="count-positive">3</span><span class="count-negative">4</span></div>',
  '  <input type="search" placeholder="Search">',
  ' </div>',
  ' <p>For more examples checkout the <a href="http://maker.github.com/ratchet/">ratchet project.</a></p>',
  '</div>'
].join('\n');
var RatchetView = Jr.View.extend({
  render: function() {
    this.$el.html(RatchetTemplate);
    return this;
  },

  events: {
    'click .button-prev': 'onClickButtonPrev',
    'click .button-next': 'onClickButtonNext',
    'click .example-toggle': 'onClickExampleToggle',
    'click .ff': 'news',
    'click .f2': 'news2'
  },

  news2: function() {
    this.$('.f2').text('change');
    this.$('.f2').after(' <a class="button-main">to2</a>')
  },
  news: function() {
    this.$('.ff').text('change');
    this.$('.ff').after(' <a class="f2 button-positive">to</a>')
  },

  onClickButtonPrev: function() {
    Jr.Navigator.navigate('', {
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.RIGHT
      }
    });
  },

  onClickButtonNext: function() {
    Jr.Navigator.navigate('pushstate', {
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.LEFT
      }
    });
  },

  onClickExampleToggle: function() {
    this.$('.example-toggle').toggleClass('active');
  }
});
var PushStateTemplate = [
  '<header class="bar-title">',
  ' <div class="header-animated">',
  '   <div class="button-prev">Back</div>',
  '   <h1 class="title">Pushstate API</h1>',
  '   <div class="button-next">Next</div>',
  '</header>',
  '<div class="content pushstate-content">',
  '  <summary>In combination with backbone\'s routing and the pushstate api, Jr. maintains animations when you use pushstate.</summary>',
  '  <i class="icon-umbrella"></i>',
  '  <p>Push the browser back button to watch it work.</p>',
  '</div> '
].join('\n');
var PushStateView = Jr.View.extend({
  render: function() {
    this.$el.html(PushStateTemplate);
    return this;
  },

  events: {
    'click .button-prev': 'onClickButtonPrev',
    'click .button-next': 'onClickButtonNext'
  },

  onClickButtonNext: function() {
    Jr.Navigator.navigate('slider', {
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.LEFT
      }
    });
  },
  onClickButtonPrev: function() {
    Jr.Navigator.navigate('ratchet', {
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.RIGHT
      }
    });
  }

});

// 自己添加的测试
var slider = [
'<header class="bar-title">',
  ' <div class="header-animated">',
  '   <div class="button-prev">Back</div>',
  '   <h1 class="title">Pushstate API</h1>',
  '</header>',
'<div class="content ratchet-content">',
'<ul class="bxslider">',
  '<li><img src="http://bxslider.com/images/730_200/tree_root.jpg" title="Funky roots" /></li>',
  '<li><img src="http://bxslider.com/images/730_200/hill_road.jpg" title="The long and winding road" /></li>',
  '<li><img src="http://bxslider.com/images/730_200/trees.jpg" title="Happy trees" /></li>',
'</ul></div>'
].join('\n');
var sliderview = Jr.View.extend({
  render: function() {
    this.$el.html(slider);
    this.diao();
    return this;
  },
  events: {
    'click .button-prev': 'onClickButtonPrev'
  },
  diao: function() {
    var after = function() {
      j$('.bxslider').bxSlider({
        infiniteLoop: true,
        hideControlOnEnd: true,
        captions: true
      });
    };
    setTimeout(after, 1);
    
  },
  onClickButtonPrev: function() {
    Jr.Navigator.navigate('pushstate', {
      trigger: true,
      animation: {
        type: Jr.Navigator.animations.SLIDE_STACK,
        direction: Jr.Navigator.directions.RIGHT
      }
    });
  }
})

var AppRouter = Jr.Router.extend({
  routes: {
    '': 'home',
    'ratchet': 'ratchets',
    'pushstate': 'pushstate',
    'slider': 'slider'
  },

  home: function() {
    var homeView = new HomeView();
    this.renderView(homeView);
  },

  ratchets: function() {
    var ratchetView = new RatchetView();
    this.renderView(ratchetView);
  },

  pushstate: function() {
    var pushStateView = new PushStateView();
    this.renderView(pushStateView);
  },

  slider: function() {
    var slider = new sliderview();
    this.renderView(slider)
  }

});

var appRouter = new AppRouter();
Backbone.history.start();