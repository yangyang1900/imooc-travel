/*
* @Author: yangyang
* @Date:   2019-02-28 14:23:45
* @Last Modified by:   yangyang
* @Last Modified time: 2019-02-28 14:39:14
*/

let defaultCity = '上海'

try {
	if(localStorage.city){
		defaultCity = localStorage.city
	}
} catch (e){

}

export default{
	city:defaultCity
}