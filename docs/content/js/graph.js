/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 79.0, "minX": 0.0, "maxY": 2008.0, "series": [{"data": [[0.0, 79.0], [0.1, 80.0], [0.2, 80.0], [0.3, 80.0], [0.4, 81.0], [0.5, 81.0], [0.6, 81.0], [0.7, 81.0], [0.8, 81.0], [0.9, 81.0], [1.0, 82.0], [1.1, 82.0], [1.2, 82.0], [1.3, 82.0], [1.4, 82.0], [1.5, 82.0], [1.6, 82.0], [1.7, 82.0], [1.8, 82.0], [1.9, 82.0], [2.0, 82.0], [2.1, 83.0], [2.2, 83.0], [2.3, 83.0], [2.4, 83.0], [2.5, 83.0], [2.6, 83.0], [2.7, 83.0], [2.8, 83.0], [2.9, 83.0], [3.0, 83.0], [3.1, 83.0], [3.2, 83.0], [3.3, 83.0], [3.4, 83.0], [3.5, 83.0], [3.6, 83.0], [3.7, 83.0], [3.8, 83.0], [3.9, 83.0], [4.0, 83.0], [4.1, 83.0], [4.2, 84.0], [4.3, 84.0], [4.4, 84.0], [4.5, 84.0], [4.6, 84.0], [4.7, 84.0], [4.8, 84.0], [4.9, 84.0], [5.0, 84.0], [5.1, 84.0], [5.2, 84.0], [5.3, 84.0], [5.4, 84.0], [5.5, 84.0], [5.6, 84.0], [5.7, 84.0], [5.8, 84.0], [5.9, 84.0], [6.0, 84.0], [6.1, 84.0], [6.2, 84.0], [6.3, 84.0], [6.4, 84.0], [6.5, 84.0], [6.6, 84.0], [6.7, 84.0], [6.8, 85.0], [6.9, 85.0], [7.0, 85.0], [7.1, 85.0], [7.2, 85.0], [7.3, 85.0], [7.4, 85.0], [7.5, 85.0], [7.6, 85.0], [7.7, 85.0], [7.8, 85.0], [7.9, 85.0], [8.0, 85.0], [8.1, 85.0], [8.2, 85.0], [8.3, 85.0], [8.4, 85.0], [8.5, 85.0], [8.6, 85.0], [8.7, 85.0], [8.8, 85.0], [8.9, 85.0], [9.0, 85.0], [9.1, 85.0], [9.2, 85.0], [9.3, 85.0], [9.4, 85.0], [9.5, 85.0], [9.6, 85.0], [9.7, 85.0], [9.8, 86.0], [9.9, 86.0], [10.0, 86.0], [10.1, 86.0], [10.2, 86.0], [10.3, 86.0], [10.4, 86.0], [10.5, 86.0], [10.6, 86.0], [10.7, 86.0], [10.8, 86.0], [10.9, 86.0], [11.0, 86.0], [11.1, 86.0], [11.2, 86.0], [11.3, 86.0], [11.4, 86.0], [11.5, 86.0], [11.6, 86.0], [11.7, 86.0], [11.8, 86.0], [11.9, 86.0], [12.0, 86.0], [12.1, 86.0], [12.2, 86.0], [12.3, 86.0], [12.4, 86.0], [12.5, 86.0], [12.6, 86.0], [12.7, 86.0], [12.8, 86.0], [12.9, 86.0], [13.0, 86.0], [13.1, 86.0], [13.2, 86.0], [13.3, 86.0], [13.4, 87.0], [13.5, 87.0], [13.6, 87.0], [13.7, 87.0], [13.8, 87.0], [13.9, 87.0], [14.0, 87.0], [14.1, 87.0], [14.2, 87.0], [14.3, 87.0], [14.4, 87.0], [14.5, 87.0], [14.6, 87.0], [14.7, 87.0], [14.8, 87.0], [14.9, 87.0], [15.0, 87.0], [15.1, 87.0], [15.2, 87.0], [15.3, 87.0], [15.4, 87.0], [15.5, 87.0], [15.6, 87.0], [15.7, 87.0], [15.8, 87.0], [15.9, 87.0], [16.0, 87.0], [16.1, 87.0], [16.2, 87.0], [16.3, 87.0], [16.4, 87.0], [16.5, 87.0], [16.6, 87.0], [16.7, 88.0], [16.8, 88.0], [16.9, 88.0], [17.0, 88.0], [17.1, 88.0], [17.2, 88.0], [17.3, 88.0], [17.4, 88.0], [17.5, 88.0], [17.6, 88.0], [17.7, 88.0], [17.8, 88.0], [17.9, 88.0], [18.0, 88.0], [18.1, 88.0], [18.2, 88.0], [18.3, 88.0], [18.4, 88.0], [18.5, 88.0], [18.6, 88.0], [18.7, 88.0], [18.8, 88.0], [18.9, 88.0], [19.0, 88.0], [19.1, 88.0], [19.2, 88.0], [19.3, 88.0], [19.4, 88.0], [19.5, 88.0], [19.6, 88.0], [19.7, 88.0], [19.8, 88.0], [19.9, 88.0], [20.0, 88.0], [20.1, 88.0], [20.2, 88.0], [20.3, 89.0], [20.4, 89.0], [20.5, 89.0], [20.6, 89.0], [20.7, 89.0], [20.8, 89.0], [20.9, 89.0], [21.0, 89.0], [21.1, 89.0], [21.2, 89.0], [21.3, 89.0], [21.4, 89.0], [21.5, 89.0], [21.6, 89.0], [21.7, 89.0], [21.8, 89.0], [21.9, 89.0], [22.0, 89.0], [22.1, 89.0], [22.2, 89.0], [22.3, 89.0], [22.4, 89.0], [22.5, 89.0], [22.6, 89.0], [22.7, 89.0], [22.8, 89.0], [22.9, 89.0], [23.0, 89.0], [23.1, 89.0], [23.2, 89.0], [23.3, 89.0], [23.4, 89.0], [23.5, 89.0], [23.6, 89.0], [23.7, 89.0], [23.8, 89.0], [23.9, 89.0], [24.0, 89.0], [24.1, 90.0], [24.2, 90.0], [24.3, 90.0], [24.4, 90.0], [24.5, 90.0], [24.6, 90.0], [24.7, 90.0], [24.8, 90.0], [24.9, 90.0], [25.0, 90.0], [25.1, 90.0], [25.2, 90.0], [25.3, 90.0], [25.4, 90.0], [25.5, 90.0], [25.6, 90.0], [25.7, 90.0], [25.8, 90.0], [25.9, 90.0], [26.0, 90.0], [26.1, 90.0], [26.2, 90.0], [26.3, 90.0], [26.4, 90.0], [26.5, 90.0], [26.6, 90.0], [26.7, 90.0], [26.8, 90.0], [26.9, 90.0], [27.0, 90.0], [27.1, 90.0], [27.2, 90.0], [27.3, 90.0], [27.4, 90.0], [27.5, 90.0], [27.6, 91.0], [27.7, 91.0], [27.8, 91.0], [27.9, 91.0], [28.0, 91.0], [28.1, 91.0], [28.2, 91.0], [28.3, 91.0], [28.4, 91.0], [28.5, 91.0], [28.6, 91.0], [28.7, 91.0], [28.8, 91.0], [28.9, 91.0], [29.0, 91.0], [29.1, 91.0], [29.2, 91.0], [29.3, 91.0], [29.4, 91.0], [29.5, 91.0], [29.6, 91.0], [29.7, 91.0], [29.8, 91.0], [29.9, 91.0], [30.0, 91.0], [30.1, 91.0], [30.2, 91.0], [30.3, 91.0], [30.4, 91.0], [30.5, 91.0], [30.6, 91.0], [30.7, 91.0], [30.8, 92.0], [30.9, 92.0], [31.0, 92.0], [31.1, 92.0], [31.2, 92.0], [31.3, 92.0], [31.4, 92.0], [31.5, 92.0], [31.6, 92.0], [31.7, 92.0], [31.8, 92.0], [31.9, 92.0], [32.0, 92.0], [32.1, 92.0], [32.2, 92.0], [32.3, 92.0], [32.4, 92.0], [32.5, 92.0], [32.6, 92.0], [32.7, 92.0], [32.8, 92.0], [32.9, 92.0], [33.0, 92.0], [33.1, 92.0], [33.2, 92.0], [33.3, 92.0], [33.4, 92.0], [33.5, 92.0], [33.6, 92.0], [33.7, 92.0], [33.8, 92.0], [33.9, 93.0], [34.0, 93.0], [34.1, 93.0], [34.2, 93.0], [34.3, 93.0], [34.4, 93.0], [34.5, 93.0], [34.6, 93.0], [34.7, 93.0], [34.8, 93.0], [34.9, 93.0], [35.0, 93.0], [35.1, 93.0], [35.2, 93.0], [35.3, 93.0], [35.4, 93.0], [35.5, 93.0], [35.6, 93.0], [35.7, 93.0], [35.8, 93.0], [35.9, 93.0], [36.0, 93.0], [36.1, 93.0], [36.2, 93.0], [36.3, 93.0], [36.4, 93.0], [36.5, 93.0], [36.6, 93.0], [36.7, 93.0], [36.8, 93.0], [36.9, 94.0], [37.0, 94.0], [37.1, 94.0], [37.2, 94.0], [37.3, 94.0], [37.4, 94.0], [37.5, 94.0], [37.6, 94.0], [37.7, 94.0], [37.8, 94.0], [37.9, 94.0], [38.0, 94.0], [38.1, 94.0], [38.2, 94.0], [38.3, 94.0], [38.4, 94.0], [38.5, 94.0], [38.6, 94.0], [38.7, 94.0], [38.8, 94.0], [38.9, 94.0], [39.0, 94.0], [39.1, 94.0], [39.2, 94.0], [39.3, 94.0], [39.4, 95.0], [39.5, 95.0], [39.6, 95.0], [39.7, 95.0], [39.8, 95.0], [39.9, 95.0], [40.0, 95.0], [40.1, 95.0], [40.2, 95.0], [40.3, 95.0], [40.4, 95.0], [40.5, 95.0], [40.6, 95.0], [40.7, 95.0], [40.8, 95.0], [40.9, 95.0], [41.0, 95.0], [41.1, 95.0], [41.2, 95.0], [41.3, 95.0], [41.4, 95.0], [41.5, 95.0], [41.6, 96.0], [41.7, 96.0], [41.8, 96.0], [41.9, 96.0], [42.0, 96.0], [42.1, 96.0], [42.2, 96.0], [42.3, 96.0], [42.4, 96.0], [42.5, 96.0], [42.6, 96.0], [42.7, 96.0], [42.8, 96.0], [42.9, 96.0], [43.0, 96.0], [43.1, 96.0], [43.2, 96.0], [43.3, 96.0], [43.4, 96.0], [43.5, 96.0], [43.6, 96.0], [43.7, 97.0], [43.8, 97.0], [43.9, 97.0], [44.0, 97.0], [44.1, 97.0], [44.2, 97.0], [44.3, 97.0], [44.4, 97.0], [44.5, 97.0], [44.6, 97.0], [44.7, 97.0], [44.8, 97.0], [44.9, 97.0], [45.0, 97.0], [45.1, 97.0], [45.2, 97.0], [45.3, 97.0], [45.4, 97.0], [45.5, 97.0], [45.6, 97.0], [45.7, 98.0], [45.8, 98.0], [45.9, 98.0], [46.0, 98.0], [46.1, 98.0], [46.2, 98.0], [46.3, 98.0], [46.4, 98.0], [46.5, 98.0], [46.6, 98.0], [46.7, 98.0], [46.8, 98.0], [46.9, 98.0], [47.0, 98.0], [47.1, 98.0], [47.2, 98.0], [47.3, 98.0], [47.4, 98.0], [47.5, 99.0], [47.6, 99.0], [47.7, 99.0], [47.8, 99.0], [47.9, 99.0], [48.0, 99.0], [48.1, 99.0], [48.2, 99.0], [48.3, 99.0], [48.4, 99.0], [48.5, 99.0], [48.6, 99.0], [48.7, 99.0], [48.8, 99.0], [48.9, 99.0], [49.0, 99.0], [49.1, 100.0], [49.2, 100.0], [49.3, 100.0], [49.4, 100.0], [49.5, 100.0], [49.6, 100.0], [49.7, 100.0], [49.8, 100.0], [49.9, 100.0], [50.0, 100.0], [50.1, 100.0], [50.2, 100.0], [50.3, 100.0], [50.4, 100.0], [50.5, 100.0], [50.6, 100.0], [50.7, 100.0], [50.8, 100.0], [50.9, 101.0], [51.0, 101.0], [51.1, 101.0], [51.2, 101.0], [51.3, 101.0], [51.4, 101.0], [51.5, 101.0], [51.6, 101.0], [51.7, 101.0], [51.8, 101.0], [51.9, 101.0], [52.0, 101.0], [52.1, 101.0], [52.2, 101.0], [52.3, 101.0], [52.4, 101.0], [52.5, 102.0], [52.6, 102.0], [52.7, 102.0], [52.8, 102.0], [52.9, 102.0], [53.0, 102.0], [53.1, 102.0], [53.2, 102.0], [53.3, 102.0], [53.4, 102.0], [53.5, 102.0], [53.6, 102.0], [53.7, 102.0], [53.8, 103.0], [53.9, 103.0], [54.0, 103.0], [54.1, 103.0], [54.2, 103.0], [54.3, 103.0], [54.4, 103.0], [54.5, 103.0], [54.6, 103.0], [54.7, 103.0], [54.8, 103.0], [54.9, 103.0], [55.0, 103.0], [55.1, 103.0], [55.2, 104.0], [55.3, 104.0], [55.4, 104.0], [55.5, 104.0], [55.6, 104.0], [55.7, 104.0], [55.8, 104.0], [55.9, 104.0], [56.0, 104.0], [56.1, 104.0], [56.2, 104.0], [56.3, 104.0], [56.4, 105.0], [56.5, 105.0], [56.6, 105.0], [56.7, 105.0], [56.8, 105.0], [56.9, 105.0], [57.0, 105.0], [57.1, 105.0], [57.2, 105.0], [57.3, 105.0], [57.4, 105.0], [57.5, 105.0], [57.6, 106.0], [57.7, 106.0], [57.8, 106.0], [57.9, 106.0], [58.0, 106.0], [58.1, 106.0], [58.2, 106.0], [58.3, 106.0], [58.4, 106.0], [58.5, 106.0], [58.6, 106.0], [58.7, 106.0], [58.8, 107.0], [58.9, 107.0], [59.0, 107.0], [59.1, 107.0], [59.2, 107.0], [59.3, 107.0], [59.4, 107.0], [59.5, 108.0], [59.6, 108.0], [59.7, 108.0], [59.8, 108.0], [59.9, 108.0], [60.0, 108.0], [60.1, 108.0], [60.2, 108.0], [60.3, 109.0], [60.4, 109.0], [60.5, 109.0], [60.6, 109.0], [60.7, 109.0], [60.8, 109.0], [60.9, 109.0], [61.0, 110.0], [61.1, 110.0], [61.2, 110.0], [61.3, 110.0], [61.4, 110.0], [61.5, 110.0], [61.6, 110.0], [61.7, 110.0], [61.8, 110.0], [61.9, 110.0], [62.0, 111.0], [62.1, 111.0], [62.2, 111.0], [62.3, 111.0], [62.4, 111.0], [62.5, 111.0], [62.6, 111.0], [62.7, 111.0], [62.8, 111.0], [62.9, 111.0], [63.0, 111.0], [63.1, 112.0], [63.2, 112.0], [63.3, 112.0], [63.4, 112.0], [63.5, 112.0], [63.6, 112.0], [63.7, 112.0], [63.8, 113.0], [63.9, 113.0], [64.0, 113.0], [64.1, 113.0], [64.2, 113.0], [64.3, 113.0], [64.4, 113.0], [64.5, 113.0], [64.6, 113.0], [64.7, 114.0], [64.8, 114.0], [64.9, 114.0], [65.0, 114.0], [65.1, 114.0], [65.2, 114.0], [65.3, 114.0], [65.4, 115.0], [65.5, 115.0], [65.6, 115.0], [65.7, 115.0], [65.8, 115.0], [65.9, 115.0], [66.0, 115.0], [66.1, 116.0], [66.2, 116.0], [66.3, 116.0], [66.4, 116.0], [66.5, 116.0], [66.6, 116.0], [66.7, 116.0], [66.8, 116.0], [66.9, 117.0], [67.0, 117.0], [67.1, 117.0], [67.2, 117.0], [67.3, 117.0], [67.4, 117.0], [67.5, 117.0], [67.6, 117.0], [67.7, 118.0], [67.8, 118.0], [67.9, 118.0], [68.0, 118.0], [68.1, 119.0], [68.2, 119.0], [68.3, 119.0], [68.4, 119.0], [68.5, 120.0], [68.6, 120.0], [68.7, 120.0], [68.8, 120.0], [68.9, 120.0], [69.0, 121.0], [69.1, 121.0], [69.2, 121.0], [69.3, 121.0], [69.4, 121.0], [69.5, 121.0], [69.6, 122.0], [69.7, 122.0], [69.8, 122.0], [69.9, 122.0], [70.0, 123.0], [70.1, 123.0], [70.2, 123.0], [70.3, 123.0], [70.4, 124.0], [70.5, 124.0], [70.6, 124.0], [70.7, 125.0], [70.8, 125.0], [70.9, 125.0], [71.0, 125.0], [71.1, 125.0], [71.2, 126.0], [71.3, 126.0], [71.4, 126.0], [71.5, 127.0], [71.6, 127.0], [71.7, 127.0], [71.8, 127.0], [71.9, 127.0], [72.0, 128.0], [72.1, 128.0], [72.2, 128.0], [72.3, 129.0], [72.4, 129.0], [72.5, 129.0], [72.6, 129.0], [72.7, 129.0], [72.8, 129.0], [72.9, 130.0], [73.0, 130.0], [73.1, 130.0], [73.2, 130.0], [73.3, 131.0], [73.4, 131.0], [73.5, 132.0], [73.6, 132.0], [73.7, 132.0], [73.8, 133.0], [73.9, 133.0], [74.0, 133.0], [74.1, 133.0], [74.2, 134.0], [74.3, 134.0], [74.4, 134.0], [74.5, 135.0], [74.6, 135.0], [74.7, 135.0], [74.8, 136.0], [74.9, 136.0], [75.0, 136.0], [75.1, 136.0], [75.2, 137.0], [75.3, 137.0], [75.4, 137.0], [75.5, 137.0], [75.6, 138.0], [75.7, 138.0], [75.8, 138.0], [75.9, 138.0], [76.0, 138.0], [76.1, 139.0], [76.2, 139.0], [76.3, 139.0], [76.4, 140.0], [76.5, 140.0], [76.6, 140.0], [76.7, 141.0], [76.8, 141.0], [76.9, 141.0], [77.0, 141.0], [77.1, 142.0], [77.2, 143.0], [77.3, 143.0], [77.4, 144.0], [77.5, 144.0], [77.6, 144.0], [77.7, 145.0], [77.8, 145.0], [77.9, 146.0], [78.0, 146.0], [78.1, 146.0], [78.2, 147.0], [78.3, 147.0], [78.4, 147.0], [78.5, 147.0], [78.6, 148.0], [78.7, 148.0], [78.8, 149.0], [78.9, 149.0], [79.0, 149.0], [79.1, 150.0], [79.2, 150.0], [79.3, 151.0], [79.4, 151.0], [79.5, 151.0], [79.6, 151.0], [79.7, 151.0], [79.8, 152.0], [79.9, 153.0], [80.0, 153.0], [80.1, 153.0], [80.2, 154.0], [80.3, 155.0], [80.4, 155.0], [80.5, 155.0], [80.6, 156.0], [80.7, 156.0], [80.8, 156.0], [80.9, 157.0], [81.0, 157.0], [81.1, 157.0], [81.2, 158.0], [81.3, 158.0], [81.4, 158.0], [81.5, 159.0], [81.6, 159.0], [81.7, 159.0], [81.8, 160.0], [81.9, 160.0], [82.0, 161.0], [82.1, 161.0], [82.2, 162.0], [82.3, 162.0], [82.4, 162.0], [82.5, 162.0], [82.6, 163.0], [82.7, 163.0], [82.8, 164.0], [82.9, 165.0], [83.0, 165.0], [83.1, 165.0], [83.2, 165.0], [83.3, 166.0], [83.4, 166.0], [83.5, 166.0], [83.6, 167.0], [83.7, 167.0], [83.8, 168.0], [83.9, 168.0], [84.0, 169.0], [84.1, 169.0], [84.2, 169.0], [84.3, 170.0], [84.4, 170.0], [84.5, 170.0], [84.6, 170.0], [84.7, 171.0], [84.8, 171.0], [84.9, 171.0], [85.0, 172.0], [85.1, 172.0], [85.2, 173.0], [85.3, 173.0], [85.4, 173.0], [85.5, 175.0], [85.6, 175.0], [85.7, 175.0], [85.8, 176.0], [85.9, 176.0], [86.0, 176.0], [86.1, 176.0], [86.2, 177.0], [86.3, 179.0], [86.4, 179.0], [86.5, 180.0], [86.6, 180.0], [86.7, 181.0], [86.8, 181.0], [86.9, 182.0], [87.0, 182.0], [87.1, 183.0], [87.2, 183.0], [87.3, 183.0], [87.4, 184.0], [87.5, 185.0], [87.6, 186.0], [87.7, 187.0], [87.8, 188.0], [87.9, 190.0], [88.0, 191.0], [88.1, 192.0], [88.2, 192.0], [88.3, 193.0], [88.4, 193.0], [88.5, 194.0], [88.6, 194.0], [88.7, 195.0], [88.8, 196.0], [88.9, 198.0], [89.0, 198.0], [89.1, 199.0], [89.2, 200.0], [89.3, 201.0], [89.4, 201.0], [89.5, 204.0], [89.6, 204.0], [89.7, 204.0], [89.8, 205.0], [89.9, 205.0], [90.0, 206.0], [90.1, 207.0], [90.2, 207.0], [90.3, 208.0], [90.4, 209.0], [90.5, 210.0], [90.6, 211.0], [90.7, 213.0], [90.8, 214.0], [90.9, 216.0], [91.0, 218.0], [91.1, 219.0], [91.2, 221.0], [91.3, 222.0], [91.4, 224.0], [91.5, 225.0], [91.6, 225.0], [91.7, 226.0], [91.8, 228.0], [91.9, 231.0], [92.0, 234.0], [92.1, 235.0], [92.2, 237.0], [92.3, 238.0], [92.4, 239.0], [92.5, 240.0], [92.6, 241.0], [92.7, 243.0], [92.8, 244.0], [92.9, 245.0], [93.0, 246.0], [93.1, 248.0], [93.2, 251.0], [93.3, 253.0], [93.4, 255.0], [93.5, 257.0], [93.6, 259.0], [93.7, 261.0], [93.8, 262.0], [93.9, 266.0], [94.0, 267.0], [94.1, 271.0], [94.2, 273.0], [94.3, 275.0], [94.4, 277.0], [94.5, 280.0], [94.6, 283.0], [94.7, 288.0], [94.8, 296.0], [94.9, 299.0], [95.0, 302.0], [95.1, 309.0], [95.2, 311.0], [95.3, 314.0], [95.4, 316.0], [95.5, 321.0], [95.6, 323.0], [95.7, 326.0], [95.8, 335.0], [95.9, 339.0], [96.0, 343.0], [96.1, 347.0], [96.2, 355.0], [96.3, 358.0], [96.4, 363.0], [96.5, 365.0], [96.6, 369.0], [96.7, 375.0], [96.8, 391.0], [96.9, 393.0], [97.0, 400.0], [97.1, 406.0], [97.2, 409.0], [97.3, 425.0], [97.4, 441.0], [97.5, 454.0], [97.6, 461.0], [97.7, 470.0], [97.8, 480.0], [97.9, 486.0], [98.0, 488.0], [98.1, 504.0], [98.2, 527.0], [98.3, 539.0], [98.4, 583.0], [98.5, 613.0], [98.6, 644.0], [98.7, 652.0], [98.8, 695.0], [98.9, 757.0], [99.0, 793.0], [99.1, 873.0], [99.2, 992.0], [99.3, 1032.0], [99.4, 1120.0], [99.5, 1183.0], [99.6, 1481.0], [99.7, 1563.0], [99.8, 1643.0], [99.9, 1795.0], [100.0, 2008.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1676.0, "series": [{"data": [[0.0, 1676.0], [600.0, 13.0], [700.0, 7.0], [200.0, 198.0], [800.0, 3.0], [900.0, 5.0], [1000.0, 4.0], [1100.0, 4.0], [300.0, 71.0], [1400.0, 6.0], [1500.0, 2.0], [400.0, 38.0], [100.0, 1371.0], [1600.0, 4.0], [1700.0, 2.0], [1800.0, 2.0], [500.0, 12.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 11.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3354.0, "series": [{"data": [[0.0, 3354.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 54.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 11.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.7723013E12, "maxY": 19.85714285714285, "series": [{"data": [[1.77230142E12, 17.706761565836295], [1.77230136E12, 8.896341463414643], [1.77230148E12, 19.85714285714285], [1.7723013E12, 2.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77230148E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 86.0, "minX": 1.0, "maxY": 663.0, "series": [{"data": [[2.0, 135.38709677419354], [8.0, 103.40714285714284], [9.0, 602.0], [10.0, 124.71341463414635], [11.0, 245.0], [12.0, 94.69082125603863], [3.0, 613.0], [13.0, 184.0], [14.0, 101.82978723404258], [15.0, 255.0], [4.0, 106.82857142857141], [16.0, 96.37992831541222], [1.0, 86.0], [17.0, 239.0], [18.0, 165.36861313868613], [19.0, 285.0], [20.0, 159.46310832025134], [5.0, 231.0], [6.0, 110.92857142857142], [7.0, 663.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[16.724188359169343, 140.78531734425275]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 124.76666666666667, "minX": 1.7723013E12, "maxY": 11607.866666666667, "series": [{"data": [[1.77230142E12, 11607.866666666667], [1.77230136E12, 5420.566666666667], [1.77230148E12, 10990.766666666666], [1.7723013E12, 230.23333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77230142E12, 6315.7], [1.77230136E12, 2949.633333333333], [1.77230148E12, 5981.1], [1.7723013E12, 124.76666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77230148E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 105.58993902439023, "minX": 1.7723013E12, "maxY": 157.00075187969924, "series": [{"data": [[1.77230142E12, 141.93309608540906], [1.77230136E12, 105.58993902439023], [1.77230148E12, 157.00075187969924], [1.7723013E12, 137.53571428571428]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77230148E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 105.50000000000003, "minX": 1.7723013E12, "maxY": 156.9458646616541, "series": [{"data": [[1.77230142E12, 141.8811387900356], [1.77230136E12, 105.50000000000003], [1.77230148E12, 156.9458646616541], [1.7723013E12, 137.35714285714283]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77230148E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 22.535338345864652, "minX": 1.7723013E12, "maxY": 41.35714285714286, "series": [{"data": [[1.77230142E12, 22.6405693950178], [1.77230136E12, 23.554878048780502], [1.77230148E12, 22.535338345864652], [1.7723013E12, 41.35714285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77230148E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 79.0, "minX": 1.7723013E12, "maxY": 2008.0, "series": [{"data": [[1.77230142E12, 2008.0], [1.77230136E12, 832.0], [1.77230148E12, 1837.0], [1.7723013E12, 408.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77230142E12, 205.4000000000001], [1.77230136E12, 124.0], [1.77230148E12, 244.0], [1.7723013E12, 181.1000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77230142E12, 943.5000000000041], [1.77230136E12, 258.00999999999965], [1.77230148E12, 1104.8100000000027], [1.7723013E12, 408.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77230142E12, 325.10000000000014], [1.77230136E12, 155.14999999999998], [1.77230148E12, 355.35000000000014], [1.7723013E12, 362.9999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77230142E12, 79.0], [1.77230136E12, 80.0], [1.77230148E12, 79.0], [1.7723013E12, 92.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77230142E12, 99.0], [1.77230136E12, 97.0], [1.77230148E12, 107.0], [1.7723013E12, 113.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77230148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 87.5, "minX": 2.0, "maxY": 129.0, "series": [{"data": [[2.0, 110.0], [32.0, 96.0], [34.0, 95.0], [3.0, 117.0], [4.0, 103.5], [5.0, 106.0], [6.0, 101.0], [7.0, 99.5], [8.0, 100.5], [9.0, 103.0], [10.0, 96.5], [11.0, 103.0], [12.0, 100.0], [13.0, 113.0], [14.0, 100.0], [15.0, 104.5], [16.0, 92.0], [17.0, 92.0], [18.0, 93.0], [19.0, 101.5], [20.0, 107.0], [21.0, 95.0], [22.0, 87.5], [23.0, 93.0], [24.0, 118.0], [25.0, 122.0], [26.0, 101.0], [27.0, 98.0], [28.0, 102.0], [29.0, 95.0], [30.0, 108.0], [31.0, 129.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 87.5, "minX": 2.0, "maxY": 128.0, "series": [{"data": [[2.0, 110.0], [32.0, 96.0], [34.0, 95.0], [3.0, 117.0], [4.0, 103.5], [5.0, 106.0], [6.0, 100.5], [7.0, 99.5], [8.0, 100.5], [9.0, 103.0], [10.0, 96.5], [11.0, 103.0], [12.0, 100.0], [13.0, 113.0], [14.0, 100.0], [15.0, 104.5], [16.0, 91.5], [17.0, 92.0], [18.0, 93.0], [19.0, 101.0], [20.0, 107.0], [21.0, 95.0], [22.0, 87.5], [23.0, 93.0], [24.0, 118.0], [25.0, 122.0], [26.0, 101.0], [27.0, 98.0], [28.0, 102.0], [29.0, 95.0], [30.0, 108.0], [31.0, 128.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.7723013E12, "maxY": 23.483333333333334, "series": [{"data": [[1.77230142E12, 23.483333333333334], [1.77230136E12, 10.95], [1.77230148E12, 22.083333333333332], [1.7723013E12, 0.4666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77230148E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.7723013E12, "maxY": 23.416666666666668, "series": [{"data": [[1.77230142E12, 23.416666666666668], [1.77230136E12, 10.933333333333334], [1.77230148E12, 22.166666666666668], [1.7723013E12, 0.4666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77230148E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.7723013E12, "maxY": 23.416666666666668, "series": [{"data": [[1.77230142E12, 23.416666666666668], [1.77230136E12, 10.933333333333334], [1.77230148E12, 22.166666666666668], [1.7723013E12, 0.4666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77230148E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.7723013E12, "maxY": 23.416666666666668, "series": [{"data": [[1.77230142E12, 23.416666666666668], [1.77230136E12, 10.933333333333334], [1.77230148E12, 22.166666666666668], [1.7723013E12, 0.4666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77230148E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

