### 1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spend almost 15 hours for development. If I had more time to do this, I would definitely add test, and focus more on Accessbility. In addition, I would like to create some "load more" function for user to explore more restaurants.


### 2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I read an article that there is no new feature in this version. If I need to pick one feature in the second latest version, I would like to say React hooks. It is really convenient to manage apps in terms of scalability and method bindings. 

```

const RefineSearch = ({
  options: { categories, cuisines, collections },
  getCategories,
  getCuisines,
  getCollections,
  refineRestaurants,
  city: { city },
}) => {
  const [formData, setFormData] = useState({
    category: '',
    cuisines: '',
    collection_id: '',
    q: '',
  });
  useEffect(() => {
    if (city) {
      getCategories();
      getCuisines();
      getCollections();
    }
  }, [getCategories, getCuisines, getCollections, city]);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const params = formData;
    console.log('### on submit', params);
    refineRestaurants(params);
  };
  return (
    <Fragment>
    </Fragment>
  );
};

RefineSearch.propTypes = {
  options: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  getCuisines: PropTypes.func.isRequired,
  getCollections: PropTypes.func.isRequired,
  refineRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  options: state.options,
  city: state.city,
});
export default connect(mapStateToProps, {
  getCategories,
  getCuisines,
  getCollections,
  refineRestaurants,
})(withRouter(RefineSearch));
)};

```

### How would you track down a performance issue in production? Have you ever had to do this?
I used lighthouse audit to check if there is a perfoemance issue and then tried to get rid of issues.  


### How would you improve the API that you just used?
I would like to change the name of parameters on search API. It is not matching with other API parameters
(latitude in locations API but lat in Search API)

### Please describe yourself using JSON.
```
{
   "name": "Charles",
   "sex": "male",
   "address" : "898 Portage Parkway, Vaughan",
   "profession": "Front-end Developer",
   "programming_languages": [
      {"name": "JavaScript", "level": "Intermediate"},
      {"name": "HTML5", "level": "Advanced"},
      {"name": "CSS/SASS", "level": "Advanced"},
      {"name": "Angular", "level": "Intermediate"},
      {"name": "React", "level": "Intermediate"},
      {"name": "Typescript", "level": "Intermediate"},
      {"name": "Rx.js", "level": "Intermediate"}
   ],
   "personality": ["hard-worker", "self-motivater", "strong supporter"],
   "aspiration": "As an individual who really loves JavaScript, I would like to learn many things and grow up with BMO. If you hired me for the position, I will show you that is the right choice.",
   "hobbies" : [
      {"name": "Guitar"},
      {"name": "Golf"},
      {"name": "Foot Volleyball"}
    ]
}
```