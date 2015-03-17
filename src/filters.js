filters = {
    addCommas: function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }, 

    defaultSF: function(units){
        if(!units)
            return "SF";

        return units;
    }

};
