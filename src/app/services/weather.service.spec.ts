import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';

// tslint:disable-next-line:max-line-length
const mockData = { cod: '200', message: 0.2125, cnt: 40, list: [{ dt: 1544616000, main: { temp: 7.18, temp_min: 3.99, temp_max: 7.18, pressure: 1007.1, sea_level: 1033.2, grnd_level: 1007.1, humidity: 89, temp_kf: 3.19 }, weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }], clouds: { all: 12 }, wind: { speed: 6.31, deg: 151.001 }, rain: { '3h': 0.0075 }, sys: { pod: 'd' }, dt_txt: '2018 - 12 - 12 12: 00: 00' }, { dt: 1544626800, main: { temp: 6.85, temp_min: 4.46, temp_max: 6.85, pressure: 1006.37, sea_level: 1032.36, grnd_level: 1006.37, humidity: 86, temp_kf: 2.39 }, weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }], clouds: { all: 32 }, wind: { speed: 6.62, deg: 151.51 }, rain: { '3h': 0.04 }, sys: { pod: 'd' }, dt_txt: '2018 - 12 - 12 15: 00: 00' }, { dt: 1544637600, main: { temp: 4.65, temp_min: 3.06, temp_max: 4.65, pressure: 1006.11, sea_level: 1032.1, grnd_level: 1006.11, humidity: 84, temp_kf: 1.6 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }], clouds: { all: 0 }, wind: { speed: 7.12, deg: 145.503 }, rain: {}, sys: { pod: 'n' }, dt_txt: '2018 - 12 - 12 18: 00: 00' }, { dt: 1544648400, main: { temp: 2.43, temp_min: 1.64, temp_max: 2.43, pressure: 1005.63, sea_level: 1031.78, grnd_level: 1005.63, humidity: 79, temp_kf: 0.8 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }], clouds: { all: 0 }, wind: { speed: 7.8, deg: 148.002 }, rain: {}, sys: { pod: 'n' }, dt_txt: '2018 - 12 - 12 21: 00: 00' }, { dt: 1544659200, main: { temp: 1.03, temp_min: 1.03, temp_max: 1.03, pressure: 1005.83, sea_level: 1032.08, grnd_level: 1005.83, humidity: 76, temp_kf: 0 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }], clouds: { all: 0 }, wind: { speed: 8.4, deg: 151.502 }, rain: {}, sys: { pod: 'n' }, dt_txt: '2018 - 12 - 13 00: 00: 00' }, { dt: 1544670000, main: { temp: 1.5, temp_min: 1.5, temp_max: 1.5, pressure: 1005.89, sea_level: 1032.02, grnd_level: 1005.89, humidity: 74, temp_kf: 0 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '02n' }], clouds: { all: 8 }, wind: { speed: 8.11, deg: 150.502 }, rain: {}, sys: { pod: 'n' }, dt_txt: '2018 - 12 - 13 03: 00: 00' }, { dt: 1544680800, main: { temp: 1.57, temp_min: 1.57, temp_max: 1.57, pressure: 1005.7, sea_level: 1031.95, grnd_level: 1005.7, humidity: 78, temp_kf: 0 }, weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '02n' }], clouds: { all: 8 }, wind: { 'speed': 7.68, 'deg': 147.505 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-13 06:00:00' }, { 'dt': 1544691600, 'main': { 'temp': 1.53, 'temp_min': 1.53, 'temp_max': 1.53, 'pressure': 1007.01, 'sea_level': 1033.13, 'grnd_level': 1007.01, 'humidity': 78, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02d' }], 'clouds': { 'all': 8 }, 'wind': { 'speed': 7.62, 'deg': 146.503 }, 'rain': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-13 09:00:00' }, { 'dt': 1544702400, 'main': { 'temp': 2.89, 'temp_min': 2.89, 'temp_max': 2.89, 'pressure': 1008, 'sea_level': 1034.08, 'grnd_level': 1008, 'humidity': 75, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02d' }], 'clouds': { 'all': 8 }, 'wind': { 'speed': 7.71, 'deg': 150.002 }, 'rain': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-13 12:00:00' }, { 'dt': 1544713200, 'main': { 'temp': 2.75, 'temp_min': 2.75, 'temp_max': 2.75, 'pressure': 1008.51, 'sea_level': 1034.61, 'grnd_level': 1008.51, 'humidity': 71, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 7.07, 'deg': 150.002 }, 'rain': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-13 15:00:00' }, { 'dt': 1544724000, 'main': { 'temp': 1.54, 'temp_min': 1.54, 'temp_max': 1.54, 'pressure': 1010.21, 'sea_level': 1036.51, 'grnd_level': 1010.21, 'humidity': 76, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 6.32, 'deg': 152.503 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-13 18:00:00' }, { 'dt': 1544734800, 'main': { 'temp': 0.6, 'temp_min': 0.6, 'temp_max': 0.6, 'pressure': 1011.35, 'sea_level': 1037.7, 'grnd_level': 1011.35, 'humidity': 84, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 5.56, 'deg': 155.001 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-13 21:00:00' }, { 'dt': 1544745600, 'main': { 'temp': -0.48, 'temp_min': -0.48, 'temp_max': -0.48, 'pressure': 1012.2, 'sea_level': 1038.6, 'grnd_level': 1012.2, 'humidity': 90, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 4.31, 'deg': 155.506 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-14 00:00:00' }, { 'dt': 1544756400, 'main': { 'temp': -0.86, 'temp_min': -0.86, 'temp_max': -0.86, 'pressure': 1011.72, 'sea_level': 1038.17, 'grnd_level': 1011.72, 'humidity': 90, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 4.37, 'deg': 154.002 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-14 03:00:00' }, { 'dt': 1544767200, 'main': { 'temp': -1.21, 'temp_min': -1.21, 'temp_max': -1.21, 'pressure': 1011.96, 'sea_level': 1038.32, 'grnd_level': 1011.96, 'humidity': 90, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 3.92, 'deg': 161.5 }, 'rain': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-14 06:00:00' }, { 'dt': 1544778000, 'main': { 'temp': -1.1, 'temp_min': -1.1, 'temp_max': -1.1, 'pressure': 1011.49, 'sea_level': 1037.97, 'grnd_level': 1011.49, 'humidity': 89, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02d' }], 'clouds': { 'all': 8 }, 'wind': { 'speed': 4.07, 'deg': 156.5 }, 'rain': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-14 09:00:00' }, { 'dt': 1544788800, 'main': { 'temp': 2.1, 'temp_min': 2.1, 'temp_max': 2.1, 'pressure': 1011.64, 'sea_level': 1037.98, 'grnd_level': 1011.64, 'humidity': 80, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d' }], 'clouds': { 'all': 12 }, 'wind': { 'speed': 5.71, 'deg': 167.503 }, 'rain': {}, 'snow': { '3h': 0.005 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-14 12:00:00' }, { 'dt': 1544799600, 'main': { 'temp': 1.54, 'temp_min': 1.54, 'temp_max': 1.54, 'pressure': 1011.3, 'sea_level': 1037.51, 'grnd_level': 1011.3, 'humidity': 76, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 5.81, 'deg': 166 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-14 15:00:00' }, { 'dt': 1544810400, 'main': { 'temp': 0.36, 'temp_min': 0.36, 'temp_max': 0.36, 'pressure': 1010.39, 'sea_level': 1036.87, 'grnd_level': 1010.39, 'humidity': 77, 'temp_kf': 0 }, 'weather': [{ 'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n' }], 'clouds': { 'all': 12 }, 'wind': { 'speed': 6.26, 'deg': 158.001 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-14 18:00:00' }, { 'dt': 1544821200, 'main': { 'temp': -0.41, 'temp_min': -0.41, 'temp_max': -0.41, 'pressure': 1010.74, 'sea_level': 1037.16, 'grnd_level': 1010.74, 'humidity': 79, 'temp_kf': 0 }, 'weather': [{ 'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n' }], 'clouds': { 'all': 12 }, 'wind': { 'speed': 6.02, 'deg': 163.5 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-14 21:00:00' }, { 'dt': 1544832000, 'main': { 'temp': -0.92, 'temp_min': -0.92, 'temp_max': -0.92, 'pressure': 1010.33, 'sea_level': 1036.79, 'grnd_level': 1010.33, 'humidity': 82, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '02n' }], 'clouds': { 'all': 8 }, 'wind': { 'speed': 6.12, 'deg': 165.502 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-15 00:00:00' }, { 'dt': 1544842800, 'main': { 'temp': -1.29, 'temp_min': -1.29, 'temp_max': -1.29, 'pressure': 1009.28, 'sea_level': 1035.86, 'grnd_level': 1009.28, 'humidity': 81, 'temp_kf': 0 }, 'weather': [{ 'id': 801, 'main': 'Clouds', 'description': 'few clouds', 'icon': '02n' }], 'clouds': { 'all': 12 }, 'wind': { 'speed': 5.87, 'deg': 157.51 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-15 03:00:00' }, { 'dt': 1544853600, 'main': { 'temp': -1.12, 'temp_min': -1.12, 'temp_max': -1.12, 'pressure': 1007.86, 'sea_level': 1034.27, 'grnd_level': 1007.86, 'humidity': 77, 'temp_kf': 0 }, 'weather': [{ 'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n' }], 'clouds': { 'all': 36 }, 'wind': { 'speed': 6.62, 'deg': 152.501 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-15 06:00:00' }, { 'dt': 1544864400, 'main': { 'temp': -0.13, 'temp_min': -0.13, 'temp_max': -0.13, 'pressure': 1005.82, 'sea_level': 1032.21, 'grnd_level': 1005.82, 'humidity': 74, 'temp_kf': 0 }, 'weather': [{ 'id': 803, 'main': 'Clouds', 'description': 'broken clouds', 'icon': '04d' }], 'clouds': { 'all': 68 }, 'wind': { 'speed': 8.36, 'deg': 145.508 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-15 09:00:00' }, { 'dt': 1544875200, 'main': { 'temp': 1.24, 'temp_min': 1.24, 'temp_max': 1.24, 'pressure': 1003.14, 'sea_level': 1029.37, 'grnd_level': 1003.14, 'humidity': 72, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 9.41, 'deg': 143.002 }, 'rain': {}, 'snow': { '3h': 0.02 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-15 12:00:00' }, { 'dt': 1544886000, 'main': { 'temp': 0.92, 'temp_min': 0.92, 'temp_max': 0.92, 'pressure': 998.78, 'sea_level': 1025, 'grnd_level': 998.78, 'humidity': 71, 'temp_kf': 0 }, 'weather': [{ 'id': 600, 'main': 'Snow', 'description': 'light snow', 'icon': '13d' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 9.97, 'deg': 144 }, 'rain': {}, 'snow': { '3h': 0.665 }, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-15 15:00:00' }, { 'dt': 1544896800, 'main': { 'temp': 1.16, 'temp_min': 1.16, 'temp_max': 1.16, 'pressure': 994.76, 'sea_level': 1020.77, 'grnd_level': 994.76, 'humidity': 69, 'temp_kf': 0 }, 'weather': [{ 'id': 600, 'main': 'Snow', 'description': 'light snow', 'icon': '13n' }], 'clouds': { 'all': 88 }, 'wind': { 'speed': 10.71, 'deg': 142.502 }, 'rain': {}, 'snow': { '3h': 0.235 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-15 18:00:00' }, { 'dt': 1544907600, 'main': { 'temp': 0.95, 'temp_min': 0.95, 'temp_max': 0.95, 'pressure': 989.99, 'sea_level': 1015.99, 'grnd_level': 989.99, 'humidity': 77, 'temp_kf': 0 }, 'weather': [{ 'id': 600, 'main': 'Snow', 'description': 'light snow', 'icon': '13n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 11.59, 'deg': 139.501 }, 'rain': {}, 'snow': { '3h': 1.115 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-15 21:00:00' }, { 'dt': 1544918400, 'main': { 'temp': 1.36, 'temp_min': 1.36, 'temp_max': 1.36, 'pressure': 984.91, 'sea_level': 1010.7, 'grnd_level': 984.91, 'humidity': 89, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 12.66, 'deg': 140.501 }, 'rain': { '3h': 0.2 }, 'snow': { '3h': 0.605 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-16 00:00:00' }, { 'dt': 1544929200, 'main': { 'temp': 1.26, 'temp_min': 1.26, 'temp_max': 1.26, 'pressure': 981.22, 'sea_level': 1006.81, 'grnd_level': 981.22, 'humidity': 96, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 12.22, 'deg': 142.502 }, 'rain': { '3h': 1.39 }, 'snow': { '3h': 3.32 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-16 03:00:00' }, { 'dt': 1544940000, 'main': { 'temp': 2.93, 'temp_min': 2.93, 'temp_max': 2.93, 'pressure': 979.31, 'sea_level': 1004.74, 'grnd_level': 979.31, 'humidity': 93, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 9.7, 'deg': 153 }, 'rain': { '3h': 0.88 }, 'snow': { '3h': 0.155 }, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-16 06:00:00' }, { 'dt': 1544950800, 'main': { 'temp': 4.71, 'temp_min': 4.71, 'temp_max': 4.71, 'pressure': 982.41, 'sea_level': 1007.69, 'grnd_level': 982.41, 'humidity': 93, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 88 }, 'wind': { 'speed': 5.96, 'deg': 223.004 }, 'rain': { '3h': 0.6 }, 'snow': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-16 09:00:00' }, { 'dt': 1544961600, 'main': { 'temp': 4.58, 'temp_min': 4.58, 'temp_max': 4.58, 'pressure': 985.47, 'sea_level': 1010.77, 'grnd_level': 985.47, 'humidity': 93, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 36 }, 'wind': { 'speed': 5.21, 'deg': 219.502 }, 'rain': { '3h': 0.01 }, 'snow': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-16 12:00:00' }, { 'dt': 1544972400, 'main': { 'temp': 3.32, 'temp_min': 3.32, 'temp_max': 3.32, 'pressure': 987.01, 'sea_level': 1012.32, 'grnd_level': 987.01, 'humidity': 91, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01d' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 3.47, 'deg': 201.5 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-16 15:00:00' }, { 'dt': 1544983200, 'main': { 'temp': 0.47, 'temp_min': 0.47, 'temp_max': 0.47, 'pressure': 988.04, 'sea_level': 1013.64, 'grnd_level': 988.04, 'humidity': 82, 'temp_kf': 0 }, 'weather': [{ 'id': 800, 'main': 'Clear', 'description': 'clear sky', 'icon': '01n' }], 'clouds': { 'all': 0 }, 'wind': { 'speed': 2.67, 'deg': 162.503 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-16 18:00:00' }, { 'dt': 1544994000, 'main': { 'temp': -1.18, 'temp_min': -1.18, 'temp_max': -1.18, 'pressure': 989.19, 'sea_level': 1014.71, 'grnd_level': 989.19, 'humidity': 82, 'temp_kf': 0 }, 'weather': [{ 'id': 802, 'main': 'Clouds', 'description': 'scattered clouds', 'icon': '03n' }], 'clouds': { 'all': 44 }, 'wind': { 'speed': 1.83, 'deg': 135.5 }, 'rain': {}, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-16 21:00:00' }, { 'dt': 1545004800, 'main': { 'temp': 1.37, 'temp_min': 1.37, 'temp_max': 1.37, 'pressure': 989.26, 'sea_level': 1014.87, 'grnd_level': 989.26, 'humidity': 91, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 88 }, 'wind': { 'speed': 1.86, 'deg': 102.003 }, 'rain': { '3h': 0.29 }, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-17 00:00:00' }, { 'dt': 1545015600, 'main': { 'temp': 2.37, 'temp_min': 2.37, 'temp_max': 2.37, 'pressure': 989.19, 'sea_level': 1014.7, 'grnd_level': 989.19, 'humidity': 87, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 2.93, 'deg': 113.5 }, 'rain': { '3h': 0.49 }, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-17 03:00:00' }, { 'dt': 1545026400, 'main': { 'temp': 3.3, 'temp_min': 3.3, 'temp_max': 3.3, 'pressure': 989.57, 'sea_level': 1014.99, 'grnd_level': 989.57, 'humidity': 92, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10n' }], 'clouds': { 'all': 92 }, 'wind': { 'speed': 3.41, 'deg': 124.501 }, 'rain': { '3h': 0.32 }, 'snow': {}, 'sys': { 'pod': 'n' }, 'dt_txt': '2018-12-17 06:00:00' }, { 'dt': 1545037200, 'main': { 'temp': 3.61, 'temp_min': 3.61, 'temp_max': 3.61, 'pressure': 990.65, 'sea_level': 1016.14, 'grnd_level': 990.65, 'humidity': 92, 'temp_kf': 0 }, 'weather': [{ 'id': 500, 'main': 'Rain', 'description': 'light rain', 'icon': '10d' }], 'clouds': { 'all': 80 }, 'wind': { 'speed': 3.31, 'deg': 109.501 }, 'rain': { '3h': 0.28 }, 'snow': {}, 'sys': { 'pod': 'd' }, 'dt_txt': '2018-12-17 09:00:00' }], 'city': { 'id': 2650225, 'name': 'Edinburgh', 'coord': { 'lat': 55.9521, 'lon': -3.1965 }, 'country': 'GB', 'population': 435791 } };
describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch weather data',
    inject([HttpTestingController, WeatherService],
      (httpMock: HttpTestingController, service: WeatherService) => {
        service.getForcast({ city: 'Edinburgh', country: 'uk' }).subscribe(data => {
          expect(data.city.name).toBe('Edinburgh');
          expect(data.pageInfo.pageNumber).toBe(0);
          expect(data.data.length).toBe(7);
        });

        // tslint:disable-next-line:max-line-length
        const req = httpMock.expectOne('https://api.openweathermap.org/data/2.5/forecast?appid=3f0bedb111e1607e4787c5725cbd7cf8&units=metric');
        expect(req.request.method).toEqual('GET');

        req.flush({ data: mockData });
      })
  );
});
