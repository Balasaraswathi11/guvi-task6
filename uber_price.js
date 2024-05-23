class Uber {
    constructor(baseFare, ratePerKm, additionalCharges) {
        this.baseFare = baseFare;
        this.ratePerKm = ratePerKm;
        this.additionalCharges = additionalCharges;
    }

    calculateTotalFare(distance) {
        const totalFare = this.baseFare + (this.ratePerKm * distance) + this.additionalCharges;
        console.log(`Total fare for ${distance} km: ${totalFare}`);
    }
}

const regularUber = {
    baseFare: 100,
    ratePerKm: 15,
    additionalCharges: 0,
    calculateTotalFare: function(distance) {
        const totalFare = this.baseFare + (this.ratePerKm * distance) + this.additionalCharges;
        console.log(`Total fare for ${distance} km: ${totalFare}`);
    }
};

const luxuryUber = {
    baseFare: 200,
    ratePerKm: 25,
    additionalCharges: 50,
    calculateTotalPrice: function(distance) {
        const totalFare = this.baseFare + (this.ratePerKm * distance) + this.additionalCharges;
        console.log(`Total fare for ${distance} km: ${totalFare}`);
    }
};


regularUber.calculateTotalFare(10); //250
luxuryUber.calculateTotalFare(10); //500
