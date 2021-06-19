AFRAME.registerComponent('base', {
    schema: {
        radius: {type: "number", default:15},
        height: {type:"number", default:3},
    },
    
    init: function () {
      this.el.setAttribute("geometry",{
          primitive:"cylinder",
          radius: this.data.radius,
          height:  this.data.height
      });
      this.el.setAttribute("material",{color:"greenyellow"})
    }
});
AFRAME.registerComponent('click', {
    schema: {
        click: {type:"number",default:0}
        
    },
    update: function () {
      // Do something when component's data is updated.
     
    },

});
