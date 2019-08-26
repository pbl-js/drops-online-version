import uuidv4 from "uuid/v4";
import food from "../assets/topicIcons/food.png";
import moreFood from "../assets/topicIcons/more-food.png";
import drinks from "../assets/topicIcons/drinks.png";
import fruits from "../assets/topicIcons/fruits.png";
import vegetable from "../assets/topicIcons/vegetable.png";
import moreVegetable from "../assets/topicIcons/more-vegetable.png";

const initialState = {
  background: "topics",
  time: {
    minutes: 5,
    seconds: 59
  },
  sections: [
    {
      id: 1,
      title: "Jedzdenie i picie",
      description: null,
      topics: [
        {
          id: 1,
          title: "Jedzenie",
          color: "orange",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: [
            {
              eng: "bread",
              pl: "chleb",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "breakfast",
              pl: "śniadanie",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "fruits",
              pl: "owoce",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "cheese",
              pl: "ser",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "egg",
              pl: "jajko",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "fish",
              pl: "ryba",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "fork",
              pl: "widelec",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "soup",
              pl: "zupa",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "mushroom",
              pl: "grzyb",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "knife",
              pl: "nóż",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "lemon",
              pl: "cytryna",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            },
            {
              eng: "meat",
              pl: "mięso",
              img: "url",
              seen: false,
              known: false,
              learningProgress: {
                value: 0,
                total: 100
              },
              masteringProgress: {
                value: 0,
                total: 100
              }
            }
          ]
        },
        {
          id: 2,
          title: "Jedzenie (Ciąg dalszy)",
          color: "orange",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "orange",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "orange",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "orange",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "orange",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "orange",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "orange",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "orange",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "orange",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "orange",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "orange",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "Jedzenie i picie",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "red",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "red",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "red",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "red",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "red",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "red",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "red",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "red",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "red",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "red",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "red",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "red",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "Podstawy",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "cherry",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "cherry",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "cherry",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "cherry",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "cherry",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "cherry",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "cherry",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "cherry",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "red",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "cherry",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "cherry",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "cherry",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "Natura i zwierzęta",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "purple1",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "purple1",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "purple1",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "purple1",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "purple1",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "purple1",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "purple1",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "purple1",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "purple1",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "purple1",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "purple1",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "purple1",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "ludzie i zdrowie",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "purple2",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "purple2",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "purple2",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "purple2",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "purple2",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "purple2",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "purple2",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "purple2",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "purple2",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "purple2",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "purple2",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "purple2",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "podróz i pojazdy",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "blue1",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "blue1",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "blue1",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "blue1",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "blue1",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "blue1",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "blue1",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "blue1",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "blue1",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "blue1",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "blue1",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "blue1",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "dom i ogród",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "blue2",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "blue2",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "blue2",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "blue2",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "blue2",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "blue2",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "blue2",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "blue2",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "blue2",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "blue2",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "blue2",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "blue2",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "miasto i sklepy",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "green1",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "green1",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "green1",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "green1",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "green1",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "green1",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "green1",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "green1",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "green1",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "green1",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "green1",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "green1",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "biznes i technologia",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "green2",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "green2",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "green2",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "green2",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "green2",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "green2",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "green2",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "green2",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "green2",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "green2",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "green2",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "green2",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "moda i ubrania",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "green3",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "green3",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "green3",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "green3",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "green3",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "green3",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "green3",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "green3",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "green3",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "green3",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "green3",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "green3",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "rozrywka i rekreacja",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "green4",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "green4",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "green4",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "green4",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "green4",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "green4",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "green4",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "green4",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "green4",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "green4",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "green4",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "green4",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "nauka",
      description: null,
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "orange",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "orange",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "orange",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "orange",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "orange",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "orange",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "orange",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "orange",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "orange",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "orange",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "orange",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "orange",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "sport",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "red",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "red",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "red",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "red",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "red",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "red",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "red",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "red",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "red",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "red",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "red",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "red",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    },
    {
      id: uuidv4(),
      title: "społeczeństwo i polityka",
      topics: [
        {
          id: uuidv4(),
          title: "Jedzenie",
          color: "cherry",
          img: food,
          progress: {
            locked: false,
            started: true,
            passed: false,
            mastering: true,
            learningProgress: {
              value: 20,
              total: 20
            },
            masteringProgress: {
              value: 14,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzenie (Ciąg dalszy)",
          color: "cherry",
          img: moreFood,
          progress: {
            locked: false,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napoje",
          color: "cherry",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owoce",
          color: "cherry",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa",
          color: "cherry",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzywa (Ciąg dalszy)",
          color: "cherry",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzsenie",
          color: "cherry",
          img: food,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Jedzesnie (Ciąg dalszy)",
          color: "cherry",
          img: moreFood,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Napsoje",
          color: "red",
          img: drinks,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Owosce",
          color: "cherry",
          img: fruits,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa",
          color: "cherry",
          img: vegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        },
        {
          id: uuidv4(),
          title: "Warzsywa (Ciąg dalszy)",
          color: "cherry",
          img: moreVegetable,
          progress: {
            locked: true,
            started: false,
            passed: false,
            mastering: false,
            learningProgress: {
              value: 0,
              total: 20
            },
            masteringProgress: {
              value: 0,
              total: 20
            }
          },
          words: []
        }
      ]
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BACKGROUND":
      return {
        ...state,
        background: action.payload.color
      };
    case "START_TIMER":
      return {
        ...state,
        time: {
          minutes: 5,
          seconds: { ...state.time }.seconds - action.payload.value
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
