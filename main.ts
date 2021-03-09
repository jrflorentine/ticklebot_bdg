pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
servos.P0.setAngle(135)
servos.P1.setAngle(135)
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        servos.P0.setAngle(45)
        servos.P1.setAngle(45)
        basic.pause(250)
        servos.P0.setAngle(135)
        servos.P1.setAngle(135)
        basic.pause(250)
    }
})
