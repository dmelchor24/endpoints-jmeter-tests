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
        data: {"result": {"minY": 85.0, "minX": 0.0, "maxY": 1539.0, "series": [{"data": [[0.0, 85.0], [0.1, 87.0], [0.2, 88.0], [0.3, 88.0], [0.4, 88.0], [0.5, 88.0], [0.6, 88.0], [0.7, 89.0], [0.8, 89.0], [0.9, 90.0], [1.0, 90.0], [1.1, 90.0], [1.2, 90.0], [1.3, 90.0], [1.4, 90.0], [1.5, 91.0], [1.6, 91.0], [1.7, 91.0], [1.8, 91.0], [1.9, 91.0], [2.0, 91.0], [2.1, 92.0], [2.2, 92.0], [2.3, 92.0], [2.4, 92.0], [2.5, 92.0], [2.6, 92.0], [2.7, 92.0], [2.8, 92.0], [2.9, 92.0], [3.0, 93.0], [3.1, 93.0], [3.2, 93.0], [3.3, 93.0], [3.4, 93.0], [3.5, 93.0], [3.6, 93.0], [3.7, 93.0], [3.8, 93.0], [3.9, 93.0], [4.0, 93.0], [4.1, 93.0], [4.2, 93.0], [4.3, 93.0], [4.4, 94.0], [4.5, 94.0], [4.6, 94.0], [4.7, 94.0], [4.8, 94.0], [4.9, 94.0], [5.0, 94.0], [5.1, 94.0], [5.2, 94.0], [5.3, 94.0], [5.4, 94.0], [5.5, 95.0], [5.6, 95.0], [5.7, 95.0], [5.8, 95.0], [5.9, 95.0], [6.0, 95.0], [6.1, 95.0], [6.2, 95.0], [6.3, 95.0], [6.4, 95.0], [6.5, 95.0], [6.6, 95.0], [6.7, 95.0], [6.8, 95.0], [6.9, 95.0], [7.0, 96.0], [7.1, 96.0], [7.2, 96.0], [7.3, 96.0], [7.4, 96.0], [7.5, 96.0], [7.6, 96.0], [7.7, 96.0], [7.8, 96.0], [7.9, 96.0], [8.0, 96.0], [8.1, 96.0], [8.2, 96.0], [8.3, 96.0], [8.4, 96.0], [8.5, 96.0], [8.6, 97.0], [8.7, 97.0], [8.8, 97.0], [8.9, 97.0], [9.0, 97.0], [9.1, 97.0], [9.2, 97.0], [9.3, 97.0], [9.4, 97.0], [9.5, 97.0], [9.6, 97.0], [9.7, 97.0], [9.8, 97.0], [9.9, 97.0], [10.0, 97.0], [10.1, 97.0], [10.2, 98.0], [10.3, 98.0], [10.4, 98.0], [10.5, 98.0], [10.6, 98.0], [10.7, 98.0], [10.8, 98.0], [10.9, 98.0], [11.0, 98.0], [11.1, 98.0], [11.2, 98.0], [11.3, 98.0], [11.4, 98.0], [11.5, 98.0], [11.6, 98.0], [11.7, 98.0], [11.8, 98.0], [11.9, 98.0], [12.0, 98.0], [12.1, 98.0], [12.2, 98.0], [12.3, 98.0], [12.4, 99.0], [12.5, 99.0], [12.6, 99.0], [12.7, 99.0], [12.8, 99.0], [12.9, 99.0], [13.0, 99.0], [13.1, 99.0], [13.2, 99.0], [13.3, 99.0], [13.4, 99.0], [13.5, 99.0], [13.6, 100.0], [13.7, 100.0], [13.8, 100.0], [13.9, 100.0], [14.0, 100.0], [14.1, 100.0], [14.2, 100.0], [14.3, 100.0], [14.4, 100.0], [14.5, 100.0], [14.6, 100.0], [14.7, 100.0], [14.8, 100.0], [14.9, 100.0], [15.0, 100.0], [15.1, 100.0], [15.2, 100.0], [15.3, 100.0], [15.4, 101.0], [15.5, 101.0], [15.6, 101.0], [15.7, 101.0], [15.8, 101.0], [15.9, 101.0], [16.0, 101.0], [16.1, 101.0], [16.2, 101.0], [16.3, 101.0], [16.4, 101.0], [16.5, 101.0], [16.6, 101.0], [16.7, 101.0], [16.8, 101.0], [16.9, 101.0], [17.0, 101.0], [17.1, 101.0], [17.2, 102.0], [17.3, 102.0], [17.4, 102.0], [17.5, 102.0], [17.6, 102.0], [17.7, 102.0], [17.8, 102.0], [17.9, 102.0], [18.0, 102.0], [18.1, 102.0], [18.2, 102.0], [18.3, 102.0], [18.4, 102.0], [18.5, 102.0], [18.6, 102.0], [18.7, 102.0], [18.8, 102.0], [18.9, 102.0], [19.0, 102.0], [19.1, 103.0], [19.2, 103.0], [19.3, 103.0], [19.4, 103.0], [19.5, 103.0], [19.6, 103.0], [19.7, 103.0], [19.8, 103.0], [19.9, 103.0], [20.0, 103.0], [20.1, 103.0], [20.2, 103.0], [20.3, 103.0], [20.4, 103.0], [20.5, 103.0], [20.6, 104.0], [20.7, 104.0], [20.8, 104.0], [20.9, 104.0], [21.0, 104.0], [21.1, 104.0], [21.2, 104.0], [21.3, 104.0], [21.4, 104.0], [21.5, 104.0], [21.6, 104.0], [21.7, 104.0], [21.8, 104.0], [21.9, 104.0], [22.0, 104.0], [22.1, 104.0], [22.2, 105.0], [22.3, 105.0], [22.4, 105.0], [22.5, 105.0], [22.6, 105.0], [22.7, 105.0], [22.8, 105.0], [22.9, 105.0], [23.0, 105.0], [23.1, 105.0], [23.2, 105.0], [23.3, 105.0], [23.4, 105.0], [23.5, 105.0], [23.6, 105.0], [23.7, 106.0], [23.8, 106.0], [23.9, 106.0], [24.0, 106.0], [24.1, 106.0], [24.2, 106.0], [24.3, 106.0], [24.4, 106.0], [24.5, 106.0], [24.6, 106.0], [24.7, 106.0], [24.8, 106.0], [24.9, 106.0], [25.0, 106.0], [25.1, 106.0], [25.2, 106.0], [25.3, 106.0], [25.4, 106.0], [25.5, 107.0], [25.6, 107.0], [25.7, 107.0], [25.8, 107.0], [25.9, 107.0], [26.0, 107.0], [26.1, 107.0], [26.2, 107.0], [26.3, 107.0], [26.4, 107.0], [26.5, 107.0], [26.6, 107.0], [26.7, 107.0], [26.8, 107.0], [26.9, 107.0], [27.0, 107.0], [27.1, 108.0], [27.2, 108.0], [27.3, 108.0], [27.4, 108.0], [27.5, 108.0], [27.6, 108.0], [27.7, 108.0], [27.8, 108.0], [27.9, 108.0], [28.0, 108.0], [28.1, 108.0], [28.2, 108.0], [28.3, 108.0], [28.4, 108.0], [28.5, 108.0], [28.6, 108.0], [28.7, 108.0], [28.8, 109.0], [28.9, 109.0], [29.0, 109.0], [29.1, 109.0], [29.2, 109.0], [29.3, 109.0], [29.4, 109.0], [29.5, 109.0], [29.6, 109.0], [29.7, 109.0], [29.8, 109.0], [29.9, 109.0], [30.0, 109.0], [30.1, 109.0], [30.2, 109.0], [30.3, 109.0], [30.4, 109.0], [30.5, 110.0], [30.6, 110.0], [30.7, 110.0], [30.8, 110.0], [30.9, 110.0], [31.0, 110.0], [31.1, 110.0], [31.2, 110.0], [31.3, 110.0], [31.4, 110.0], [31.5, 110.0], [31.6, 110.0], [31.7, 110.0], [31.8, 110.0], [31.9, 110.0], [32.0, 110.0], [32.1, 110.0], [32.2, 111.0], [32.3, 111.0], [32.4, 111.0], [32.5, 111.0], [32.6, 111.0], [32.7, 111.0], [32.8, 111.0], [32.9, 111.0], [33.0, 111.0], [33.1, 111.0], [33.2, 111.0], [33.3, 111.0], [33.4, 111.0], [33.5, 111.0], [33.6, 111.0], [33.7, 112.0], [33.8, 112.0], [33.9, 112.0], [34.0, 112.0], [34.1, 112.0], [34.2, 112.0], [34.3, 112.0], [34.4, 112.0], [34.5, 112.0], [34.6, 112.0], [34.7, 112.0], [34.8, 112.0], [34.9, 112.0], [35.0, 112.0], [35.1, 112.0], [35.2, 113.0], [35.3, 113.0], [35.4, 113.0], [35.5, 113.0], [35.6, 113.0], [35.7, 113.0], [35.8, 113.0], [35.9, 113.0], [36.0, 113.0], [36.1, 113.0], [36.2, 113.0], [36.3, 113.0], [36.4, 113.0], [36.5, 113.0], [36.6, 113.0], [36.7, 113.0], [36.8, 113.0], [36.9, 114.0], [37.0, 114.0], [37.1, 114.0], [37.2, 114.0], [37.3, 114.0], [37.4, 114.0], [37.5, 114.0], [37.6, 114.0], [37.7, 114.0], [37.8, 114.0], [37.9, 114.0], [38.0, 114.0], [38.1, 114.0], [38.2, 114.0], [38.3, 114.0], [38.4, 114.0], [38.5, 115.0], [38.6, 115.0], [38.7, 115.0], [38.8, 115.0], [38.9, 115.0], [39.0, 115.0], [39.1, 115.0], [39.2, 115.0], [39.3, 115.0], [39.4, 115.0], [39.5, 115.0], [39.6, 115.0], [39.7, 115.0], [39.8, 115.0], [39.9, 115.0], [40.0, 115.0], [40.1, 115.0], [40.2, 115.0], [40.3, 116.0], [40.4, 116.0], [40.5, 116.0], [40.6, 116.0], [40.7, 116.0], [40.8, 116.0], [40.9, 116.0], [41.0, 116.0], [41.1, 116.0], [41.2, 116.0], [41.3, 116.0], [41.4, 116.0], [41.5, 116.0], [41.6, 116.0], [41.7, 116.0], [41.8, 116.0], [41.9, 116.0], [42.0, 116.0], [42.1, 116.0], [42.2, 117.0], [42.3, 117.0], [42.4, 117.0], [42.5, 117.0], [42.6, 117.0], [42.7, 117.0], [42.8, 117.0], [42.9, 117.0], [43.0, 117.0], [43.1, 117.0], [43.2, 117.0], [43.3, 117.0], [43.4, 117.0], [43.5, 117.0], [43.6, 117.0], [43.7, 117.0], [43.8, 117.0], [43.9, 117.0], [44.0, 117.0], [44.1, 118.0], [44.2, 118.0], [44.3, 118.0], [44.4, 118.0], [44.5, 118.0], [44.6, 118.0], [44.7, 118.0], [44.8, 118.0], [44.9, 118.0], [45.0, 118.0], [45.1, 118.0], [45.2, 118.0], [45.3, 118.0], [45.4, 118.0], [45.5, 118.0], [45.6, 118.0], [45.7, 118.0], [45.8, 118.0], [45.9, 118.0], [46.0, 119.0], [46.1, 119.0], [46.2, 119.0], [46.3, 119.0], [46.4, 119.0], [46.5, 119.0], [46.6, 119.0], [46.7, 119.0], [46.8, 119.0], [46.9, 119.0], [47.0, 119.0], [47.1, 119.0], [47.2, 119.0], [47.3, 119.0], [47.4, 119.0], [47.5, 119.0], [47.6, 119.0], [47.7, 119.0], [47.8, 119.0], [47.9, 120.0], [48.0, 120.0], [48.1, 120.0], [48.2, 120.0], [48.3, 120.0], [48.4, 120.0], [48.5, 120.0], [48.6, 120.0], [48.7, 120.0], [48.8, 120.0], [48.9, 120.0], [49.0, 120.0], [49.1, 120.0], [49.2, 120.0], [49.3, 121.0], [49.4, 121.0], [49.5, 121.0], [49.6, 121.0], [49.7, 121.0], [49.8, 121.0], [49.9, 121.0], [50.0, 121.0], [50.1, 121.0], [50.2, 121.0], [50.3, 121.0], [50.4, 121.0], [50.5, 121.0], [50.6, 121.0], [50.7, 121.0], [50.8, 121.0], [50.9, 121.0], [51.0, 121.0], [51.1, 122.0], [51.2, 122.0], [51.3, 122.0], [51.4, 122.0], [51.5, 122.0], [51.6, 122.0], [51.7, 122.0], [51.8, 122.0], [51.9, 122.0], [52.0, 122.0], [52.1, 122.0], [52.2, 122.0], [52.3, 123.0], [52.4, 123.0], [52.5, 123.0], [52.6, 123.0], [52.7, 123.0], [52.8, 123.0], [52.9, 123.0], [53.0, 123.0], [53.1, 123.0], [53.2, 123.0], [53.3, 123.0], [53.4, 123.0], [53.5, 123.0], [53.6, 123.0], [53.7, 123.0], [53.8, 123.0], [53.9, 123.0], [54.0, 123.0], [54.1, 124.0], [54.2, 124.0], [54.3, 124.0], [54.4, 124.0], [54.5, 124.0], [54.6, 124.0], [54.7, 124.0], [54.8, 124.0], [54.9, 124.0], [55.0, 124.0], [55.1, 124.0], [55.2, 124.0], [55.3, 124.0], [55.4, 124.0], [55.5, 124.0], [55.6, 124.0], [55.7, 124.0], [55.8, 125.0], [55.9, 125.0], [56.0, 125.0], [56.1, 125.0], [56.2, 125.0], [56.3, 125.0], [56.4, 125.0], [56.5, 125.0], [56.6, 125.0], [56.7, 125.0], [56.8, 125.0], [56.9, 125.0], [57.0, 125.0], [57.1, 125.0], [57.2, 126.0], [57.3, 126.0], [57.4, 126.0], [57.5, 126.0], [57.6, 126.0], [57.7, 126.0], [57.8, 126.0], [57.9, 126.0], [58.0, 126.0], [58.1, 126.0], [58.2, 126.0], [58.3, 126.0], [58.4, 126.0], [58.5, 126.0], [58.6, 126.0], [58.7, 127.0], [58.8, 127.0], [58.9, 127.0], [59.0, 127.0], [59.1, 127.0], [59.2, 127.0], [59.3, 127.0], [59.4, 127.0], [59.5, 127.0], [59.6, 127.0], [59.7, 127.0], [59.8, 127.0], [59.9, 128.0], [60.0, 128.0], [60.1, 128.0], [60.2, 128.0], [60.3, 128.0], [60.4, 128.0], [60.5, 128.0], [60.6, 128.0], [60.7, 128.0], [60.8, 128.0], [60.9, 128.0], [61.0, 128.0], [61.1, 128.0], [61.2, 128.0], [61.3, 129.0], [61.4, 129.0], [61.5, 129.0], [61.6, 129.0], [61.7, 129.0], [61.8, 129.0], [61.9, 129.0], [62.0, 129.0], [62.1, 129.0], [62.2, 129.0], [62.3, 129.0], [62.4, 129.0], [62.5, 129.0], [62.6, 130.0], [62.7, 130.0], [62.8, 130.0], [62.9, 130.0], [63.0, 130.0], [63.1, 130.0], [63.2, 130.0], [63.3, 130.0], [63.4, 130.0], [63.5, 130.0], [63.6, 130.0], [63.7, 131.0], [63.8, 131.0], [63.9, 131.0], [64.0, 131.0], [64.1, 131.0], [64.2, 131.0], [64.3, 131.0], [64.4, 131.0], [64.5, 131.0], [64.6, 131.0], [64.7, 132.0], [64.8, 132.0], [64.9, 132.0], [65.0, 132.0], [65.1, 132.0], [65.2, 132.0], [65.3, 132.0], [65.4, 132.0], [65.5, 132.0], [65.6, 132.0], [65.7, 132.0], [65.8, 132.0], [65.9, 133.0], [66.0, 133.0], [66.1, 133.0], [66.2, 133.0], [66.3, 133.0], [66.4, 133.0], [66.5, 133.0], [66.6, 134.0], [66.7, 134.0], [66.8, 134.0], [66.9, 134.0], [67.0, 134.0], [67.1, 134.0], [67.2, 134.0], [67.3, 134.0], [67.4, 134.0], [67.5, 134.0], [67.6, 135.0], [67.7, 135.0], [67.8, 135.0], [67.9, 135.0], [68.0, 135.0], [68.1, 135.0], [68.2, 135.0], [68.3, 135.0], [68.4, 136.0], [68.5, 136.0], [68.6, 136.0], [68.7, 136.0], [68.8, 136.0], [68.9, 136.0], [69.0, 136.0], [69.1, 136.0], [69.2, 136.0], [69.3, 137.0], [69.4, 137.0], [69.5, 137.0], [69.6, 137.0], [69.7, 137.0], [69.8, 137.0], [69.9, 137.0], [70.0, 137.0], [70.1, 137.0], [70.2, 137.0], [70.3, 138.0], [70.4, 138.0], [70.5, 138.0], [70.6, 138.0], [70.7, 138.0], [70.8, 138.0], [70.9, 138.0], [71.0, 138.0], [71.1, 138.0], [71.2, 139.0], [71.3, 139.0], [71.4, 139.0], [71.5, 139.0], [71.6, 139.0], [71.7, 139.0], [71.8, 139.0], [71.9, 140.0], [72.0, 140.0], [72.1, 140.0], [72.2, 140.0], [72.3, 140.0], [72.4, 140.0], [72.5, 141.0], [72.6, 141.0], [72.7, 141.0], [72.8, 141.0], [72.9, 141.0], [73.0, 142.0], [73.1, 142.0], [73.2, 142.0], [73.3, 142.0], [73.4, 142.0], [73.5, 142.0], [73.6, 142.0], [73.7, 143.0], [73.8, 143.0], [73.9, 143.0], [74.0, 143.0], [74.1, 143.0], [74.2, 143.0], [74.3, 144.0], [74.4, 144.0], [74.5, 144.0], [74.6, 144.0], [74.7, 145.0], [74.8, 145.0], [74.9, 145.0], [75.0, 145.0], [75.1, 145.0], [75.2, 146.0], [75.3, 146.0], [75.4, 146.0], [75.5, 146.0], [75.6, 147.0], [75.7, 147.0], [75.8, 147.0], [75.9, 147.0], [76.0, 147.0], [76.1, 147.0], [76.2, 147.0], [76.3, 148.0], [76.4, 148.0], [76.5, 148.0], [76.6, 148.0], [76.7, 148.0], [76.8, 149.0], [76.9, 149.0], [77.0, 149.0], [77.1, 149.0], [77.2, 149.0], [77.3, 150.0], [77.4, 150.0], [77.5, 150.0], [77.6, 150.0], [77.7, 151.0], [77.8, 151.0], [77.9, 151.0], [78.0, 151.0], [78.1, 152.0], [78.2, 152.0], [78.3, 152.0], [78.4, 152.0], [78.5, 153.0], [78.6, 153.0], [78.7, 153.0], [78.8, 153.0], [78.9, 153.0], [79.0, 153.0], [79.1, 154.0], [79.2, 154.0], [79.3, 154.0], [79.4, 154.0], [79.5, 155.0], [79.6, 155.0], [79.7, 155.0], [79.8, 156.0], [79.9, 156.0], [80.0, 156.0], [80.1, 157.0], [80.2, 157.0], [80.3, 157.0], [80.4, 158.0], [80.5, 158.0], [80.6, 158.0], [80.7, 158.0], [80.8, 159.0], [80.9, 159.0], [81.0, 159.0], [81.1, 160.0], [81.2, 160.0], [81.3, 161.0], [81.4, 161.0], [81.5, 161.0], [81.6, 162.0], [81.7, 162.0], [81.8, 162.0], [81.9, 163.0], [82.0, 163.0], [82.1, 163.0], [82.2, 163.0], [82.3, 164.0], [82.4, 164.0], [82.5, 164.0], [82.6, 165.0], [82.7, 165.0], [82.8, 166.0], [82.9, 166.0], [83.0, 166.0], [83.1, 167.0], [83.2, 167.0], [83.3, 167.0], [83.4, 167.0], [83.5, 168.0], [83.6, 168.0], [83.7, 168.0], [83.8, 168.0], [83.9, 169.0], [84.0, 169.0], [84.1, 169.0], [84.2, 170.0], [84.3, 170.0], [84.4, 170.0], [84.5, 170.0], [84.6, 171.0], [84.7, 171.0], [84.8, 172.0], [84.9, 172.0], [85.0, 172.0], [85.1, 173.0], [85.2, 173.0], [85.3, 174.0], [85.4, 174.0], [85.5, 175.0], [85.6, 175.0], [85.7, 175.0], [85.8, 176.0], [85.9, 176.0], [86.0, 177.0], [86.1, 177.0], [86.2, 178.0], [86.3, 178.0], [86.4, 178.0], [86.5, 179.0], [86.6, 179.0], [86.7, 180.0], [86.8, 181.0], [86.9, 181.0], [87.0, 181.0], [87.1, 182.0], [87.2, 182.0], [87.3, 183.0], [87.4, 183.0], [87.5, 183.0], [87.6, 184.0], [87.7, 184.0], [87.8, 185.0], [87.9, 185.0], [88.0, 186.0], [88.1, 186.0], [88.2, 188.0], [88.3, 189.0], [88.4, 189.0], [88.5, 190.0], [88.6, 190.0], [88.7, 191.0], [88.8, 191.0], [88.9, 191.0], [89.0, 192.0], [89.1, 193.0], [89.2, 193.0], [89.3, 195.0], [89.4, 195.0], [89.5, 196.0], [89.6, 197.0], [89.7, 198.0], [89.8, 199.0], [89.9, 199.0], [90.0, 200.0], [90.1, 201.0], [90.2, 202.0], [90.3, 202.0], [90.4, 203.0], [90.5, 204.0], [90.6, 205.0], [90.7, 206.0], [90.8, 207.0], [90.9, 207.0], [91.0, 208.0], [91.1, 211.0], [91.2, 212.0], [91.3, 213.0], [91.4, 214.0], [91.5, 214.0], [91.6, 216.0], [91.7, 217.0], [91.8, 220.0], [91.9, 220.0], [92.0, 220.0], [92.1, 222.0], [92.2, 223.0], [92.3, 224.0], [92.4, 225.0], [92.5, 226.0], [92.6, 228.0], [92.7, 229.0], [92.8, 230.0], [92.9, 231.0], [93.0, 232.0], [93.1, 233.0], [93.2, 235.0], [93.3, 237.0], [93.4, 240.0], [93.5, 240.0], [93.6, 241.0], [93.7, 242.0], [93.8, 243.0], [93.9, 246.0], [94.0, 247.0], [94.1, 250.0], [94.2, 252.0], [94.3, 253.0], [94.4, 254.0], [94.5, 256.0], [94.6, 256.0], [94.7, 258.0], [94.8, 259.0], [94.9, 261.0], [95.0, 263.0], [95.1, 263.0], [95.2, 265.0], [95.3, 266.0], [95.4, 267.0], [95.5, 268.0], [95.6, 270.0], [95.7, 274.0], [95.8, 277.0], [95.9, 280.0], [96.0, 285.0], [96.1, 287.0], [96.2, 291.0], [96.3, 296.0], [96.4, 297.0], [96.5, 302.0], [96.6, 305.0], [96.7, 311.0], [96.8, 311.0], [96.9, 314.0], [97.0, 320.0], [97.1, 325.0], [97.2, 335.0], [97.3, 340.0], [97.4, 345.0], [97.5, 354.0], [97.6, 359.0], [97.7, 369.0], [97.8, 371.0], [97.9, 374.0], [98.0, 376.0], [98.1, 378.0], [98.2, 400.0], [98.3, 405.0], [98.4, 422.0], [98.5, 435.0], [98.6, 453.0], [98.7, 487.0], [98.8, 509.0], [98.9, 523.0], [99.0, 541.0], [99.1, 558.0], [99.2, 583.0], [99.3, 652.0], [99.4, 707.0], [99.5, 944.0], [99.6, 971.0], [99.7, 1052.0], [99.8, 1105.0], [99.9, 1226.0], [100.0, 1539.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 2591.0, "series": [{"data": [[0.0, 458.0], [600.0, 5.0], [700.0, 3.0], [200.0, 219.0], [800.0, 1.0], [900.0, 6.0], [1000.0, 3.0], [1100.0, 3.0], [300.0, 59.0], [1200.0, 2.0], [1300.0, 1.0], [1500.0, 2.0], [400.0, 20.0], [100.0, 2591.0], [500.0, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3348.0, "series": [{"data": [[0.0, 3348.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 39.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.253796095444684, "minX": 1.77171114E12, "maxY": 20.0, "series": [{"data": [[1.77171114E12, 7.253796095444684], [1.77171132E12, 17.33802816901409], [1.7717112E12, 16.155905511811014], [1.77171126E12, 20.0]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77171132E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 93.0, "minX": 1.0, "maxY": 171.60606060606062, "series": [{"data": [[2.0, 171.60606060606062], [8.0, 125.5454545454545], [9.0, 121.0], [10.0, 125.32947976878616], [11.0, 101.0], [12.0, 124.73000000000003], [3.0, 107.0], [13.0, 109.0], [14.0, 123.95614035087719], [15.0, 114.0], [4.0, 127.15624999999997], [16.0, 121.95437262357412], [1.0, 153.0], [17.0, 116.0], [18.0, 143.54054054054058], [19.0, 93.0], [20.0, 156.79915656299434], [5.0, 104.0], [6.0, 125.67021276595744]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[16.7698436116849, 144.61611094718194]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 319.5, "minX": 1.77171114E12, "maxY": 13112.066666666668, "series": [{"data": [[1.77171114E12, 3797.85], [1.77171132E12, 586.9333333333333], [1.7717112E12, 10486.133333333333], [1.77171126E12, 13112.066666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77171114E12, 2070.9], [1.77171132E12, 319.5], [1.7717112E12, 5711.433333333333], [1.77171126E12, 7134.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77171132E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 115.81690140845068, "minX": 1.77171114E12, "maxY": 152.91745431631998, "series": [{"data": [[1.77171114E12, 128.77440347071598], [1.77171132E12, 115.81690140845068], [1.7717112E12, 141.60314960629907], [1.77171126E12, 152.91745431631998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77171132E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 115.73239436619718, "minX": 1.77171114E12, "maxY": 152.8727158160048, "series": [{"data": [[1.77171114E12, 128.70065075921903], [1.77171132E12, 115.73239436619718], [1.7717112E12, 141.5070866141729], [1.77171126E12, 152.8727158160048]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77171132E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.782608695652169, "minX": 1.77171114E12, "maxY": 11.993492407809102, "series": [{"data": [[1.77171114E12, 11.993492407809102], [1.77171132E12, 10.309859154929578], [1.7717112E12, 10.220472440944866], [1.77171126E12, 9.782608695652169]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77171132E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 85.0, "minX": 1.77171114E12, "maxY": 1539.0, "series": [{"data": [[1.77171114E12, 433.0], [1.77171132E12, 164.0], [1.7717112E12, 1210.0], [1.77171126E12, 1539.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77171114E12, 160.60000000000002], [1.77171132E12, 145.39999999999998], [1.7717112E12, 188.0], [1.77171126E12, 227.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77171114E12, 314.7399999999999], [1.77171132E12, 164.0], [1.7717112E12, 565.2499999999991], [1.77171126E12, 653.079999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77171114E12, 189.39999999999986], [1.77171132E12, 153.0], [1.7717112E12, 244.45000000000005], [1.77171126E12, 303.1999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77171114E12, 88.0], [1.77171132E12, 88.0], [1.7717112E12, 85.0], [1.77171126E12, 87.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77171114E12, 121.0], [1.77171132E12, 112.0], [1.7717112E12, 121.0], [1.77171126E12, 121.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77171132E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 114.0, "minX": 2.0, "maxY": 170.0, "series": [{"data": [[2.0, 131.0], [32.0, 170.0], [3.0, 137.5], [4.0, 119.5], [5.0, 121.0], [6.0, 128.5], [7.0, 117.0], [8.0, 124.0], [9.0, 117.0], [10.0, 123.0], [11.0, 123.0], [12.0, 122.0], [13.0, 114.0], [14.0, 121.5], [15.0, 118.0], [16.0, 126.0], [17.0, 120.0], [18.0, 122.5], [19.0, 123.5], [20.0, 121.5], [21.0, 126.0], [22.0, 122.5], [23.0, 125.0], [24.0, 120.5], [25.0, 130.0], [26.0, 123.0], [27.0, 116.0], [28.0, 120.0], [29.0, 115.0], [30.0, 116.5], [31.0, 120.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 114.0, "minX": 2.0, "maxY": 170.0, "series": [{"data": [[2.0, 131.0], [32.0, 170.0], [3.0, 136.5], [4.0, 119.5], [5.0, 121.0], [6.0, 128.5], [7.0, 117.0], [8.0, 124.0], [9.0, 117.0], [10.0, 123.0], [11.0, 123.0], [12.0, 122.0], [13.0, 114.0], [14.0, 121.5], [15.0, 118.0], [16.0, 126.0], [17.0, 120.0], [18.0, 122.0], [19.0, 123.5], [20.0, 121.5], [21.0, 126.0], [22.0, 122.5], [23.0, 125.0], [24.0, 120.5], [25.0, 130.0], [26.0, 123.0], [27.0, 116.0], [28.0, 120.0], [29.0, 115.0], [30.0, 116.5], [31.0, 120.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.1333333333333333, "minX": 1.77171114E12, "maxY": 26.483333333333334, "series": [{"data": [[1.77171114E12, 7.716666666666667], [1.77171132E12, 1.1333333333333333], [1.7717112E12, 21.15], [1.77171126E12, 26.483333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77171132E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.77171114E12, "maxY": 26.45, "series": [{"data": [[1.77171114E12, 7.683333333333334], [1.77171132E12, 1.1833333333333333], [1.7717112E12, 21.166666666666668], [1.77171126E12, 26.45]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77171132E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.77171114E12, "maxY": 26.45, "series": [{"data": [[1.77171114E12, 7.683333333333334], [1.77171132E12, 1.1833333333333333], [1.7717112E12, 21.166666666666668], [1.77171126E12, 26.45]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77171132E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.77171114E12, "maxY": 26.45, "series": [{"data": [[1.77171114E12, 7.683333333333334], [1.77171132E12, 1.1833333333333333], [1.7717112E12, 21.166666666666668], [1.77171126E12, 26.45]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77171132E12, "title": "Total Transactions Per Second"}},
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

