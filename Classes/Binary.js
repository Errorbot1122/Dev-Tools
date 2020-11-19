function IsAPowerOf(exponent, number) {
  return (Math.log(exponent) / Math.log(number)) % 1 === 0;
}

class Bit {
  #value = false;

  constructor(value) {
    if (value === false || value === true || value === 1 || value === 0) {
      this.#value = Boolean(value);
    } else {
      throw new Error("Incompatible value");
    }
  }

  /**
   * @param {(Number|Boolean)} newValue the new bit value
   */
  set value(newValue) {
    if (
      newValue === false ||
      newValue === true ||
      newValue === 1 ||
      newValue === 0
    ) {
      this.#value = Boolean(newValue);
    } else {
      throw new Error("Incompatible value");
    }
  }

  get value() {
    return this.#value;
  }

  Switch() {
    this.#value = !this.#value;
  }
}

class BitArray {
  #length = 8;
  #Bits = [];

  #SetBitArrayLength = function () {
    if (this.#Bits.length >= this.#length) {
      Math.sqrt(this.#Bits.length);
    }
    for (let i = this.#Bits.length; i > this.#length; i++) {
      this.#Bits[i] = 0;
    }
  };
  /**
   *
   * @param {Array} Bits Array Of up to 8 bits (1, 0, true, false, Bit)
   */
  constructor(Bits = [0, 0, 0, 0, 0, 0, 0, 0]) {
    //this.#Bits =

    if (typeof Bits === Array) {
      if (Bits.length <= 8) {
        for (let i = Bits.length - 1; i > 8; i++) {
          Bits[i] = 0;
        }
      }

      if (Bits.length >= 8) {
        throw new Error(
          `Error: Incompatible length for inputed array for pram "Bits".\n Try Making the array's length 8 bits or less`
        );
      }

      Bits.forEach((value, i, array) => {
        if (value === false || value === true || value === 1 || value === 0) {
          array[i] = Bit(value);
        } else {
          throw new Error(
            `Error: Incompatible value at index ${i} of inputed array in pram "Bits". \n Try using 1, 0, true, false or a Bit as the value of ${i}`
          );
        }
      });

      this.#Bits = Bits;
    } else {
      throw new Error(`Error: Incompatible value inputed for Bits pram. `);
    }
  }

  set Bits(newArray) {
    if (typeof Bits === Array) {
      if (newArray.length <= 8) {
        for (let i = newArray.length - 1; i > 8; i++) {
          newArray[i] = 0;
        }
      }
      if (newArray.length >= 8) {
        throw new Error(
          `Error: Incompatible length for inputed array for pram "Bits".\n Try Making the array's length 8 bits or less`
        );
      }

      newArray.forEach((value, i, array) => {
        if (value === false || value === true || value === 1 || value === 0) {
          array[i] = Bit(value);
        } else {
          throw new Error(
            `Error: Incompatible value at index ${i} of inputed array in pram "Bits". \n Try using 1, 0, true, false or a Bit as the value of ${i}`
          );
        }
      });

      this.#Bits = newArray;
    } else {
      throw new Error(`Error: Incompatible value inputed for Bits pram. `);
    }
  }
}
console.log("dsd");

console.log(Math.pow(3, Math.round(Math.log(2) / Math.log(3))));

//console.log(Boolean();
