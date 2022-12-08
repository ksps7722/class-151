AFRAME.registerComponent('box',{
    schema:{
        movez:{type:"number",default:1}
    },
    tick:function(){
        this.data.movez+=0.09
        var pos = this.el.getAttribute("position")
        pos.z=this.data.movez
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
    }
})