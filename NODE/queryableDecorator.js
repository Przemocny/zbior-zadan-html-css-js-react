// stwórz dekorator @queryalbe, który doda do obiektu lub arraya metodę .query
// w której za pomocą składni pseudo SQL będzie można wybierać odpowiednie dane

// co to jest decorator = https://www.sitepoint.com/javascript-decorators-what-they-are/
function queryalbe(input) {

}


// w przypadku obiektów powinna działać tak
const withSQLQuery = queryalbe({
    "key": 'value',
    'key1': 'value1'
})
const selected = withSQLQuery.query('where $value = "value"')
// selected == {"key":'value','key1':'value1'}

const selected1 = withSQLQuery.query('where $key = "key1"')
// selected == {'key1':'value1'}



// w przypadku arrayów z obiektami powinna działać tak
const withSQLQuery = queryalbe([{
    "key": 'value1'
}, {
    "key": 'value2'
}, {
    "key": 'val3'
}, {
    "key": 'v3'
}, {
    "key": 'val4'
}])

const selected = withSQLQuery.query('where $value = "value"')
// selected == [{"key": 'value1'}, {"key": 'value2'}]


// w przypadku arrayów z typami prostymi
const withSQLQuery = queryalbe([0,1,2,3,4,5])

const selected = withSQLQuery.query('where $value >= 2')
// selected == [2,3,4,5]
