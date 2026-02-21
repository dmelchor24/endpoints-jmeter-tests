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
        data: {"result": {"minY": 111.0, "minX": 0.0, "maxY": 1564.0, "series": [{"data": [[0.0, 111.0], [0.1, 115.0], [0.2, 115.0], [0.3, 116.0], [0.4, 116.0], [0.5, 117.0], [0.6, 117.0], [0.7, 117.0], [0.8, 118.0], [0.9, 118.0], [1.0, 118.0], [1.1, 118.0], [1.2, 118.0], [1.3, 119.0], [1.4, 119.0], [1.5, 119.0], [1.6, 119.0], [1.7, 119.0], [1.8, 119.0], [1.9, 119.0], [2.0, 119.0], [2.1, 119.0], [2.2, 119.0], [2.3, 120.0], [2.4, 120.0], [2.5, 120.0], [2.6, 120.0], [2.7, 120.0], [2.8, 120.0], [2.9, 120.0], [3.0, 120.0], [3.1, 120.0], [3.2, 120.0], [3.3, 120.0], [3.4, 120.0], [3.5, 120.0], [3.6, 120.0], [3.7, 121.0], [3.8, 121.0], [3.9, 121.0], [4.0, 121.0], [4.1, 121.0], [4.2, 121.0], [4.3, 121.0], [4.4, 121.0], [4.5, 121.0], [4.6, 121.0], [4.7, 121.0], [4.8, 121.0], [4.9, 121.0], [5.0, 121.0], [5.1, 121.0], [5.2, 121.0], [5.3, 121.0], [5.4, 122.0], [5.5, 122.0], [5.6, 122.0], [5.7, 122.0], [5.8, 122.0], [5.9, 122.0], [6.0, 122.0], [6.1, 122.0], [6.2, 122.0], [6.3, 122.0], [6.4, 122.0], [6.5, 122.0], [6.6, 122.0], [6.7, 122.0], [6.8, 123.0], [6.9, 123.0], [7.0, 123.0], [7.1, 123.0], [7.2, 123.0], [7.3, 123.0], [7.4, 123.0], [7.5, 123.0], [7.6, 123.0], [7.7, 123.0], [7.8, 123.0], [7.9, 123.0], [8.0, 123.0], [8.1, 123.0], [8.2, 123.0], [8.3, 123.0], [8.4, 123.0], [8.5, 123.0], [8.6, 123.0], [8.7, 123.0], [8.8, 124.0], [8.9, 124.0], [9.0, 124.0], [9.1, 124.0], [9.2, 124.0], [9.3, 124.0], [9.4, 124.0], [9.5, 124.0], [9.6, 124.0], [9.7, 124.0], [9.8, 124.0], [9.9, 124.0], [10.0, 124.0], [10.1, 124.0], [10.2, 124.0], [10.3, 124.0], [10.4, 124.0], [10.5, 124.0], [10.6, 124.0], [10.7, 124.0], [10.8, 125.0], [10.9, 125.0], [11.0, 125.0], [11.1, 125.0], [11.2, 125.0], [11.3, 125.0], [11.4, 125.0], [11.5, 125.0], [11.6, 125.0], [11.7, 125.0], [11.8, 125.0], [11.9, 125.0], [12.0, 125.0], [12.1, 125.0], [12.2, 125.0], [12.3, 125.0], [12.4, 125.0], [12.5, 125.0], [12.6, 125.0], [12.7, 125.0], [12.8, 125.0], [12.9, 126.0], [13.0, 126.0], [13.1, 126.0], [13.2, 126.0], [13.3, 126.0], [13.4, 126.0], [13.5, 126.0], [13.6, 126.0], [13.7, 126.0], [13.8, 126.0], [13.9, 126.0], [14.0, 126.0], [14.1, 126.0], [14.2, 126.0], [14.3, 126.0], [14.4, 126.0], [14.5, 126.0], [14.6, 126.0], [14.7, 127.0], [14.8, 127.0], [14.9, 127.0], [15.0, 127.0], [15.1, 127.0], [15.2, 127.0], [15.3, 127.0], [15.4, 127.0], [15.5, 127.0], [15.6, 127.0], [15.7, 127.0], [15.8, 127.0], [15.9, 127.0], [16.0, 127.0], [16.1, 127.0], [16.2, 127.0], [16.3, 127.0], [16.4, 127.0], [16.5, 127.0], [16.6, 128.0], [16.7, 128.0], [16.8, 128.0], [16.9, 128.0], [17.0, 128.0], [17.1, 128.0], [17.2, 128.0], [17.3, 128.0], [17.4, 128.0], [17.5, 128.0], [17.6, 128.0], [17.7, 128.0], [17.8, 128.0], [17.9, 128.0], [18.0, 128.0], [18.1, 128.0], [18.2, 128.0], [18.3, 128.0], [18.4, 128.0], [18.5, 128.0], [18.6, 128.0], [18.7, 128.0], [18.8, 128.0], [18.9, 129.0], [19.0, 129.0], [19.1, 129.0], [19.2, 129.0], [19.3, 129.0], [19.4, 129.0], [19.5, 129.0], [19.6, 129.0], [19.7, 129.0], [19.8, 129.0], [19.9, 129.0], [20.0, 129.0], [20.1, 129.0], [20.2, 129.0], [20.3, 129.0], [20.4, 129.0], [20.5, 129.0], [20.6, 129.0], [20.7, 129.0], [20.8, 129.0], [20.9, 130.0], [21.0, 130.0], [21.1, 130.0], [21.2, 130.0], [21.3, 130.0], [21.4, 130.0], [21.5, 130.0], [21.6, 130.0], [21.7, 130.0], [21.8, 130.0], [21.9, 130.0], [22.0, 130.0], [22.1, 130.0], [22.2, 130.0], [22.3, 130.0], [22.4, 130.0], [22.5, 130.0], [22.6, 130.0], [22.7, 130.0], [22.8, 130.0], [22.9, 130.0], [23.0, 131.0], [23.1, 131.0], [23.2, 131.0], [23.3, 131.0], [23.4, 131.0], [23.5, 131.0], [23.6, 131.0], [23.7, 131.0], [23.8, 131.0], [23.9, 131.0], [24.0, 131.0], [24.1, 131.0], [24.2, 131.0], [24.3, 131.0], [24.4, 131.0], [24.5, 131.0], [24.6, 131.0], [24.7, 132.0], [24.8, 132.0], [24.9, 132.0], [25.0, 132.0], [25.1, 132.0], [25.2, 132.0], [25.3, 132.0], [25.4, 132.0], [25.5, 132.0], [25.6, 132.0], [25.7, 132.0], [25.8, 132.0], [25.9, 132.0], [26.0, 132.0], [26.1, 132.0], [26.2, 132.0], [26.3, 133.0], [26.4, 133.0], [26.5, 133.0], [26.6, 133.0], [26.7, 133.0], [26.8, 133.0], [26.9, 133.0], [27.0, 133.0], [27.1, 133.0], [27.2, 133.0], [27.3, 133.0], [27.4, 133.0], [27.5, 133.0], [27.6, 133.0], [27.7, 133.0], [27.8, 133.0], [27.9, 133.0], [28.0, 133.0], [28.1, 133.0], [28.2, 133.0], [28.3, 133.0], [28.4, 133.0], [28.5, 133.0], [28.6, 133.0], [28.7, 134.0], [28.8, 134.0], [28.9, 134.0], [29.0, 134.0], [29.1, 134.0], [29.2, 134.0], [29.3, 134.0], [29.4, 134.0], [29.5, 134.0], [29.6, 134.0], [29.7, 134.0], [29.8, 134.0], [29.9, 134.0], [30.0, 134.0], [30.1, 134.0], [30.2, 135.0], [30.3, 135.0], [30.4, 135.0], [30.5, 135.0], [30.6, 135.0], [30.7, 135.0], [30.8, 135.0], [30.9, 135.0], [31.0, 135.0], [31.1, 135.0], [31.2, 135.0], [31.3, 135.0], [31.4, 135.0], [31.5, 135.0], [31.6, 135.0], [31.7, 136.0], [31.8, 136.0], [31.9, 136.0], [32.0, 136.0], [32.1, 136.0], [32.2, 136.0], [32.3, 136.0], [32.4, 136.0], [32.5, 136.0], [32.6, 136.0], [32.7, 136.0], [32.8, 136.0], [32.9, 136.0], [33.0, 136.0], [33.1, 136.0], [33.2, 136.0], [33.3, 136.0], [33.4, 136.0], [33.5, 136.0], [33.6, 136.0], [33.7, 137.0], [33.8, 137.0], [33.9, 137.0], [34.0, 137.0], [34.1, 137.0], [34.2, 137.0], [34.3, 137.0], [34.4, 137.0], [34.5, 137.0], [34.6, 137.0], [34.7, 137.0], [34.8, 137.0], [34.9, 137.0], [35.0, 137.0], [35.1, 137.0], [35.2, 138.0], [35.3, 138.0], [35.4, 138.0], [35.5, 138.0], [35.6, 138.0], [35.7, 138.0], [35.8, 138.0], [35.9, 138.0], [36.0, 138.0], [36.1, 138.0], [36.2, 138.0], [36.3, 138.0], [36.4, 138.0], [36.5, 138.0], [36.6, 138.0], [36.7, 138.0], [36.8, 138.0], [36.9, 138.0], [37.0, 139.0], [37.1, 139.0], [37.2, 139.0], [37.3, 139.0], [37.4, 139.0], [37.5, 139.0], [37.6, 139.0], [37.7, 139.0], [37.8, 139.0], [37.9, 139.0], [38.0, 139.0], [38.1, 139.0], [38.2, 139.0], [38.3, 139.0], [38.4, 139.0], [38.5, 139.0], [38.6, 139.0], [38.7, 139.0], [38.8, 139.0], [38.9, 139.0], [39.0, 139.0], [39.1, 140.0], [39.2, 140.0], [39.3, 140.0], [39.4, 140.0], [39.5, 140.0], [39.6, 140.0], [39.7, 140.0], [39.8, 140.0], [39.9, 140.0], [40.0, 140.0], [40.1, 140.0], [40.2, 140.0], [40.3, 140.0], [40.4, 140.0], [40.5, 140.0], [40.6, 141.0], [40.7, 141.0], [40.8, 141.0], [40.9, 141.0], [41.0, 141.0], [41.1, 141.0], [41.2, 141.0], [41.3, 141.0], [41.4, 141.0], [41.5, 141.0], [41.6, 141.0], [41.7, 141.0], [41.8, 141.0], [41.9, 141.0], [42.0, 141.0], [42.1, 141.0], [42.2, 141.0], [42.3, 142.0], [42.4, 142.0], [42.5, 142.0], [42.6, 142.0], [42.7, 142.0], [42.8, 142.0], [42.9, 142.0], [43.0, 142.0], [43.1, 142.0], [43.2, 142.0], [43.3, 142.0], [43.4, 142.0], [43.5, 142.0], [43.6, 142.0], [43.7, 142.0], [43.8, 142.0], [43.9, 142.0], [44.0, 142.0], [44.1, 142.0], [44.2, 142.0], [44.3, 143.0], [44.4, 143.0], [44.5, 143.0], [44.6, 143.0], [44.7, 143.0], [44.8, 143.0], [44.9, 143.0], [45.0, 143.0], [45.1, 143.0], [45.2, 143.0], [45.3, 143.0], [45.4, 143.0], [45.5, 144.0], [45.6, 144.0], [45.7, 144.0], [45.8, 144.0], [45.9, 144.0], [46.0, 144.0], [46.1, 144.0], [46.2, 144.0], [46.3, 144.0], [46.4, 144.0], [46.5, 144.0], [46.6, 144.0], [46.7, 144.0], [46.8, 144.0], [46.9, 144.0], [47.0, 144.0], [47.1, 145.0], [47.2, 145.0], [47.3, 145.0], [47.4, 145.0], [47.5, 145.0], [47.6, 145.0], [47.7, 145.0], [47.8, 145.0], [47.9, 145.0], [48.0, 145.0], [48.1, 145.0], [48.2, 145.0], [48.3, 145.0], [48.4, 145.0], [48.5, 145.0], [48.6, 145.0], [48.7, 145.0], [48.8, 145.0], [48.9, 146.0], [49.0, 146.0], [49.1, 146.0], [49.2, 146.0], [49.3, 146.0], [49.4, 146.0], [49.5, 146.0], [49.6, 146.0], [49.7, 146.0], [49.8, 146.0], [49.9, 146.0], [50.0, 146.0], [50.1, 146.0], [50.2, 146.0], [50.3, 146.0], [50.4, 146.0], [50.5, 146.0], [50.6, 146.0], [50.7, 147.0], [50.8, 147.0], [50.9, 147.0], [51.0, 147.0], [51.1, 147.0], [51.2, 147.0], [51.3, 147.0], [51.4, 147.0], [51.5, 147.0], [51.6, 147.0], [51.7, 147.0], [51.8, 147.0], [51.9, 147.0], [52.0, 147.0], [52.1, 148.0], [52.2, 148.0], [52.3, 148.0], [52.4, 148.0], [52.5, 148.0], [52.6, 148.0], [52.7, 148.0], [52.8, 148.0], [52.9, 148.0], [53.0, 148.0], [53.1, 148.0], [53.2, 148.0], [53.3, 148.0], [53.4, 148.0], [53.5, 149.0], [53.6, 149.0], [53.7, 149.0], [53.8, 149.0], [53.9, 149.0], [54.0, 149.0], [54.1, 149.0], [54.2, 149.0], [54.3, 149.0], [54.4, 149.0], [54.5, 149.0], [54.6, 149.0], [54.7, 150.0], [54.8, 150.0], [54.9, 150.0], [55.0, 150.0], [55.1, 150.0], [55.2, 150.0], [55.3, 150.0], [55.4, 150.0], [55.5, 150.0], [55.6, 150.0], [55.7, 150.0], [55.8, 150.0], [55.9, 150.0], [56.0, 151.0], [56.1, 151.0], [56.2, 151.0], [56.3, 151.0], [56.4, 151.0], [56.5, 151.0], [56.6, 151.0], [56.7, 151.0], [56.8, 151.0], [56.9, 151.0], [57.0, 151.0], [57.1, 151.0], [57.2, 151.0], [57.3, 151.0], [57.4, 151.0], [57.5, 152.0], [57.6, 152.0], [57.7, 152.0], [57.8, 152.0], [57.9, 152.0], [58.0, 152.0], [58.1, 152.0], [58.2, 152.0], [58.3, 152.0], [58.4, 152.0], [58.5, 152.0], [58.6, 152.0], [58.7, 152.0], [58.8, 153.0], [58.9, 153.0], [59.0, 153.0], [59.1, 153.0], [59.2, 153.0], [59.3, 153.0], [59.4, 153.0], [59.5, 153.0], [59.6, 153.0], [59.7, 153.0], [59.8, 153.0], [59.9, 153.0], [60.0, 153.0], [60.1, 153.0], [60.2, 153.0], [60.3, 153.0], [60.4, 153.0], [60.5, 153.0], [60.6, 153.0], [60.7, 154.0], [60.8, 154.0], [60.9, 154.0], [61.0, 154.0], [61.1, 154.0], [61.2, 154.0], [61.3, 154.0], [61.4, 154.0], [61.5, 154.0], [61.6, 154.0], [61.7, 154.0], [61.8, 155.0], [61.9, 155.0], [62.0, 155.0], [62.1, 155.0], [62.2, 155.0], [62.3, 155.0], [62.4, 155.0], [62.5, 155.0], [62.6, 155.0], [62.7, 155.0], [62.8, 155.0], [62.9, 156.0], [63.0, 156.0], [63.1, 156.0], [63.2, 156.0], [63.3, 156.0], [63.4, 156.0], [63.5, 156.0], [63.6, 156.0], [63.7, 156.0], [63.8, 156.0], [63.9, 156.0], [64.0, 156.0], [64.1, 156.0], [64.2, 156.0], [64.3, 156.0], [64.4, 156.0], [64.5, 156.0], [64.6, 157.0], [64.7, 157.0], [64.8, 157.0], [64.9, 157.0], [65.0, 157.0], [65.1, 157.0], [65.2, 157.0], [65.3, 157.0], [65.4, 157.0], [65.5, 157.0], [65.6, 157.0], [65.7, 157.0], [65.8, 157.0], [65.9, 157.0], [66.0, 157.0], [66.1, 157.0], [66.2, 158.0], [66.3, 158.0], [66.4, 158.0], [66.5, 158.0], [66.6, 158.0], [66.7, 158.0], [66.8, 158.0], [66.9, 158.0], [67.0, 158.0], [67.1, 158.0], [67.2, 158.0], [67.3, 158.0], [67.4, 159.0], [67.5, 159.0], [67.6, 159.0], [67.7, 159.0], [67.8, 159.0], [67.9, 159.0], [68.0, 159.0], [68.1, 159.0], [68.2, 159.0], [68.3, 159.0], [68.4, 159.0], [68.5, 160.0], [68.6, 160.0], [68.7, 160.0], [68.8, 160.0], [68.9, 160.0], [69.0, 160.0], [69.1, 160.0], [69.2, 160.0], [69.3, 160.0], [69.4, 160.0], [69.5, 160.0], [69.6, 160.0], [69.7, 160.0], [69.8, 160.0], [69.9, 161.0], [70.0, 161.0], [70.1, 161.0], [70.2, 161.0], [70.3, 161.0], [70.4, 161.0], [70.5, 161.0], [70.6, 161.0], [70.7, 161.0], [70.8, 161.0], [70.9, 161.0], [71.0, 161.0], [71.1, 162.0], [71.2, 162.0], [71.3, 162.0], [71.4, 162.0], [71.5, 162.0], [71.6, 162.0], [71.7, 162.0], [71.8, 162.0], [71.9, 162.0], [72.0, 162.0], [72.1, 162.0], [72.2, 163.0], [72.3, 163.0], [72.4, 163.0], [72.5, 163.0], [72.6, 163.0], [72.7, 163.0], [72.8, 163.0], [72.9, 164.0], [73.0, 164.0], [73.1, 164.0], [73.2, 164.0], [73.3, 164.0], [73.4, 164.0], [73.5, 164.0], [73.6, 164.0], [73.7, 164.0], [73.8, 165.0], [73.9, 165.0], [74.0, 165.0], [74.1, 165.0], [74.2, 165.0], [74.3, 165.0], [74.4, 165.0], [74.5, 165.0], [74.6, 165.0], [74.7, 166.0], [74.8, 166.0], [74.9, 166.0], [75.0, 166.0], [75.1, 166.0], [75.2, 166.0], [75.3, 166.0], [75.4, 167.0], [75.5, 167.0], [75.6, 167.0], [75.7, 167.0], [75.8, 168.0], [75.9, 168.0], [76.0, 168.0], [76.1, 168.0], [76.2, 168.0], [76.3, 168.0], [76.4, 168.0], [76.5, 168.0], [76.6, 169.0], [76.7, 169.0], [76.8, 169.0], [76.9, 169.0], [77.0, 169.0], [77.1, 169.0], [77.2, 169.0], [77.3, 170.0], [77.4, 170.0], [77.5, 170.0], [77.6, 170.0], [77.7, 170.0], [77.8, 170.0], [77.9, 171.0], [78.0, 171.0], [78.1, 171.0], [78.2, 171.0], [78.3, 171.0], [78.4, 172.0], [78.5, 172.0], [78.6, 172.0], [78.7, 172.0], [78.8, 172.0], [78.9, 173.0], [79.0, 173.0], [79.1, 173.0], [79.2, 174.0], [79.3, 174.0], [79.4, 174.0], [79.5, 174.0], [79.6, 174.0], [79.7, 175.0], [79.8, 175.0], [79.9, 175.0], [80.0, 175.0], [80.1, 175.0], [80.2, 175.0], [80.3, 176.0], [80.4, 176.0], [80.5, 176.0], [80.6, 176.0], [80.7, 176.0], [80.8, 176.0], [80.9, 176.0], [81.0, 177.0], [81.1, 177.0], [81.2, 177.0], [81.3, 178.0], [81.4, 178.0], [81.5, 178.0], [81.6, 179.0], [81.7, 179.0], [81.8, 179.0], [81.9, 179.0], [82.0, 179.0], [82.1, 180.0], [82.2, 180.0], [82.3, 180.0], [82.4, 180.0], [82.5, 181.0], [82.6, 181.0], [82.7, 181.0], [82.8, 182.0], [82.9, 182.0], [83.0, 182.0], [83.1, 182.0], [83.2, 183.0], [83.3, 183.0], [83.4, 183.0], [83.5, 183.0], [83.6, 184.0], [83.7, 184.0], [83.8, 184.0], [83.9, 184.0], [84.0, 185.0], [84.1, 185.0], [84.2, 186.0], [84.3, 186.0], [84.4, 186.0], [84.5, 186.0], [84.6, 186.0], [84.7, 187.0], [84.8, 187.0], [84.9, 187.0], [85.0, 188.0], [85.1, 188.0], [85.2, 188.0], [85.3, 189.0], [85.4, 190.0], [85.5, 190.0], [85.6, 190.0], [85.7, 190.0], [85.8, 191.0], [85.9, 191.0], [86.0, 192.0], [86.1, 192.0], [86.2, 193.0], [86.3, 193.0], [86.4, 194.0], [86.5, 194.0], [86.6, 194.0], [86.7, 195.0], [86.8, 196.0], [86.9, 196.0], [87.0, 196.0], [87.1, 197.0], [87.2, 197.0], [87.3, 198.0], [87.4, 199.0], [87.5, 199.0], [87.6, 199.0], [87.7, 200.0], [87.8, 200.0], [87.9, 201.0], [88.0, 201.0], [88.1, 201.0], [88.2, 201.0], [88.3, 202.0], [88.4, 202.0], [88.5, 203.0], [88.6, 203.0], [88.7, 204.0], [88.8, 204.0], [88.9, 205.0], [89.0, 206.0], [89.1, 206.0], [89.2, 207.0], [89.3, 209.0], [89.4, 210.0], [89.5, 210.0], [89.6, 211.0], [89.7, 212.0], [89.8, 213.0], [89.9, 213.0], [90.0, 214.0], [90.1, 214.0], [90.2, 215.0], [90.3, 216.0], [90.4, 218.0], [90.5, 218.0], [90.6, 218.0], [90.7, 219.0], [90.8, 221.0], [90.9, 222.0], [91.0, 224.0], [91.1, 224.0], [91.2, 224.0], [91.3, 225.0], [91.4, 226.0], [91.5, 227.0], [91.6, 228.0], [91.7, 229.0], [91.8, 231.0], [91.9, 233.0], [92.0, 235.0], [92.1, 235.0], [92.2, 237.0], [92.3, 238.0], [92.4, 239.0], [92.5, 240.0], [92.6, 241.0], [92.7, 242.0], [92.8, 243.0], [92.9, 244.0], [93.0, 246.0], [93.1, 248.0], [93.2, 250.0], [93.3, 254.0], [93.4, 255.0], [93.5, 257.0], [93.6, 259.0], [93.7, 260.0], [93.8, 262.0], [93.9, 264.0], [94.0, 265.0], [94.1, 267.0], [94.2, 269.0], [94.3, 269.0], [94.4, 270.0], [94.5, 272.0], [94.6, 276.0], [94.7, 277.0], [94.8, 281.0], [94.9, 281.0], [95.0, 283.0], [95.1, 285.0], [95.2, 287.0], [95.3, 292.0], [95.4, 296.0], [95.5, 300.0], [95.6, 304.0], [95.7, 306.0], [95.8, 310.0], [95.9, 311.0], [96.0, 313.0], [96.1, 315.0], [96.2, 315.0], [96.3, 317.0], [96.4, 319.0], [96.5, 325.0], [96.6, 326.0], [96.7, 328.0], [96.8, 331.0], [96.9, 334.0], [97.0, 336.0], [97.1, 336.0], [97.2, 340.0], [97.3, 342.0], [97.4, 347.0], [97.5, 352.0], [97.6, 358.0], [97.7, 370.0], [97.8, 375.0], [97.9, 391.0], [98.0, 399.0], [98.1, 403.0], [98.2, 414.0], [98.3, 421.0], [98.4, 426.0], [98.5, 433.0], [98.6, 436.0], [98.7, 447.0], [98.8, 461.0], [98.9, 513.0], [99.0, 526.0], [99.1, 568.0], [99.2, 621.0], [99.3, 667.0], [99.4, 707.0], [99.5, 856.0], [99.6, 911.0], [99.7, 1004.0], [99.8, 1075.0], [99.9, 1169.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 2909.0, "series": [{"data": [[600.0, 7.0], [700.0, 1.0], [200.0, 261.0], [800.0, 5.0], [900.0, 4.0], [1000.0, 4.0], [1100.0, 3.0], [300.0, 84.0], [1400.0, 1.0], [1500.0, 2.0], [400.0, 28.0], [100.0, 2909.0], [500.0, 11.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3282.0, "series": [{"data": [[0.0, 3282.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.7647058823529407, "minX": 1.77171252E12, "maxY": 19.791666666666668, "series": [{"data": [[1.77171258E12, 11.141104294478525], [1.77171252E12, 3.7647058823529407], [1.7717127E12, 19.791666666666668], [1.77171264E12, 19.054325955734424]], "isOverall": false, "label": "bzm - Concurrency Thread Group-ThreadStarter", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717127E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 121.0, "minX": 1.0, "maxY": 224.0, "series": [{"data": [[2.0, 208.46428571428572], [8.0, 155.55555555555551], [9.0, 187.0], [10.0, 152.39263803680976], [11.0, 121.0], [12.0, 159.79569892473128], [3.0, 148.0], [13.0, 159.0], [14.0, 171.5363636363636], [15.0, 185.0], [4.0, 172.19672131147541], [16.0, 151.85375494071135], [1.0, 150.0], [17.0, 140.0], [18.0, 148.45486111111103], [19.0, 133.0], [20.0, 173.9968220338984], [5.0, 132.0], [6.0, 167.4020618556701], [7.0, 224.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[16.84457831325308, 167.39096385542126]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 455.4, "minX": 1.77171252E12, "maxY": 12317.1, "series": [{"data": [[1.77171258E12, 6723.75], [1.77171252E12, 836.1], [1.7717127E12, 7535.633333333333], [1.77171264E12, 12317.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77171258E12, 3667.5], [1.77171252E12, 455.4], [1.7717127E12, 4100.433333333333], [1.77171264E12, 6702.366666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717127E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 161.2208588957053, "minX": 1.77171252E12, "maxY": 180.04901960784312, "series": [{"data": [[1.77171258E12, 161.2208588957053], [1.77171252E12, 180.04901960784312], [1.7717127E12, 165.35197368421078], [1.77171264E12, 171.1448692152915]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717127E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 161.14110429447845, "minX": 1.77171252E12, "maxY": 179.91176470588238, "series": [{"data": [[1.77171258E12, 161.14110429447845], [1.77171252E12, 179.91176470588238], [1.7717127E12, 165.29495614035093], [1.77171264E12, 171.08987256874585]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717127E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 17.149122807017545, "minX": 1.77171252E12, "maxY": 25.41176470588236, "series": [{"data": [[1.77171258E12, 19.346012269938676], [1.77171252E12, 25.41176470588236], [1.7717127E12, 17.149122807017545], [1.77171264E12, 17.21260898725686]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717127E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 111.0, "minX": 1.77171252E12, "maxY": 1564.0, "series": [{"data": [[1.77171258E12, 1158.0], [1.77171252E12, 433.0], [1.7717127E12, 970.0], [1.77171264E12, 1564.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77171258E12, 189.39999999999998], [1.77171252E12, 254.90000000000003], [1.7717127E12, 207.4000000000001], [1.77171264E12, 226.79999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77171258E12, 434.4400000000005], [1.77171252E12, 432.90999999999997], [1.7717127E12, 614.2400000000002], [1.77171264E12, 669.159999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77171258E12, 256.19999999999993], [1.77171252E12, 367.2999999999999], [1.7717127E12, 278.39999999999964], [1.77171264E12, 300.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77171258E12, 115.0], [1.77171252E12, 125.0], [1.7717127E12, 111.0], [1.77171264E12, 114.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77171258E12, 147.0], [1.77171252E12, 160.0], [1.7717127E12, 144.0], [1.77171264E12, 145.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717127E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 139.0, "minX": 1.0, "maxY": 215.0, "series": [{"data": [[2.0, 160.0], [32.0, 185.0], [3.0, 166.0], [4.0, 159.5], [5.0, 169.5], [6.0, 155.0], [7.0, 157.0], [8.0, 157.0], [9.0, 155.0], [10.0, 142.5], [11.0, 149.0], [12.0, 144.5], [13.0, 152.0], [14.0, 152.0], [15.0, 146.0], [1.0, 215.0], [16.0, 159.0], [17.0, 151.0], [18.0, 153.0], [19.0, 142.0], [20.0, 148.5], [21.0, 147.0], [22.0, 149.0], [23.0, 142.5], [24.0, 142.0], [25.0, 145.0], [26.0, 141.0], [27.0, 143.0], [28.0, 142.0], [29.0, 139.0], [30.0, 152.5], [31.0, 143.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 139.0, "minX": 1.0, "maxY": 215.0, "series": [{"data": [[2.0, 159.5], [32.0, 184.5], [3.0, 166.0], [4.0, 159.5], [5.0, 169.5], [6.0, 155.0], [7.0, 157.0], [8.0, 157.0], [9.0, 155.0], [10.0, 142.0], [11.0, 149.0], [12.0, 144.5], [13.0, 152.0], [14.0, 152.0], [15.0, 146.0], [1.0, 215.0], [16.0, 159.0], [17.0, 151.0], [18.0, 153.0], [19.0, 142.0], [20.0, 148.5], [21.0, 147.0], [22.0, 149.0], [23.0, 142.5], [24.0, 142.0], [25.0, 145.0], [26.0, 141.0], [27.0, 143.0], [28.0, 142.0], [29.0, 139.0], [30.0, 152.5], [31.0, 143.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.75, "minX": 1.77171252E12, "maxY": 24.866666666666667, "series": [{"data": [[1.77171258E12, 13.566666666666666], [1.77171252E12, 1.75], [1.7717127E12, 15.15], [1.77171264E12, 24.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717127E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.77171252E12, "maxY": 24.85, "series": [{"data": [[1.77171258E12, 13.583333333333334], [1.77171252E12, 1.7], [1.7717127E12, 15.2], [1.77171264E12, 24.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7717127E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.77171252E12, "maxY": 24.85, "series": [{"data": [[1.77171258E12, 13.583333333333334], [1.77171252E12, 1.7], [1.7717127E12, 15.2], [1.77171264E12, 24.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717127E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.7, "minX": 1.77171252E12, "maxY": 24.85, "series": [{"data": [[1.77171258E12, 13.583333333333334], [1.77171252E12, 1.7], [1.7717127E12, 15.2], [1.77171264E12, 24.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7717127E12, "title": "Total Transactions Per Second"}},
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

