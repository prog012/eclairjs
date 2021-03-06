/*                                                                         
* Copyright 2016 IBM Corp.                                                 
*                                                                          
* Licensed under the Apache License, Version 2.0 (the "License");          
* you may not use this file except in compliance with the License.         
* You may obtain a copy of the License at                                  
*                                                                          
*      http://www.apache.org/licenses/LICENSE-2.0                          
*                                                                          
* Unless required by applicable law or agreed to in writing, software      
* distributed under the License is distributed on an "AS IS" BASIS,        
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and      
* limitations under the License.                                           
*/ 

(function () {

    var JavaWrapper = require(EclairJS_Globals.NAMESPACE + '/JavaWrapper');
    var Logger = require(EclairJS_Globals.NAMESPACE + '/Logger');

    //var GaussianMixtureSummary = Java.type('org.apache.spark.ml.clustering.GaussianMixtureSummary');
    
    
    /**
     * @classdesc
     * :: Experimental ::
     * Summary of GaussianMixture.
     *
     * @param predictions  {@link DataFrame} produced by [[GaussianMixtureModel.transform()]]
     * @param predictionCol  Name for column of predicted clusters in `predictions`
     * @param probabilityCol  Name for column of predicted probability of each cluster in `predictions`
     * @param featuresCol  Name for column of features in `predictions`
     * @param k  Number of clusters
     * @class
     * @memberof module:eclairjs/ml/clustering
     */
    var GaussianMixtureSummary = function(jvmObject) {
    	 
    	 this.logger = Logger.getLogger("ml_clusstering_GaussianMixtureSummary_js");
    	 JavaWrapper.call(this, jvmObject);
    
    };

    GaussianMixtureSummary.prototype = Object.create(JavaWrapper.prototype);

    GaussianMixtureSummary.prototype.constructor = GaussianMixtureSummary;
    
    module.exports = GaussianMixtureSummary;
})();
