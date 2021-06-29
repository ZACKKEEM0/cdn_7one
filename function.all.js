var ctabletr = '';
function loadlisttb() {
  Array.prototype.random = function (length) {return this[Math.floor((Math.random()*length))];}
  function getRandomIntInclusive(min, max) {min = Math.ceil(min);max = Math.floor(max);return Math.floor(Math.random() * (max - min + 1)) + min;}
  var gamelist = ['เธเธ“เธดเธ•เธเธดเธ”เน€เธฃเนเธง']
  var gamename = gamelist.random(gamelist.length)
  var UserList = [ 'Time','Past','Future','Dev', 'Fly','Flying','Soar','Soaring','Power','Falling', 'Fall','Jump','Cliff','Mountain','Rend','Red','Blue', 'Green','Yellow','Gold','Demon','Demonic','Panda','Cat', 'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit', 'Fear','Light','Glow','Tread','Deep','Deeper','Deepest', 'Mine','Your','Worst','Enemy','Hostile','Force','Video', 'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum', 'Gun','Assault','Recon','Trap','Trapper','Redeem','Code', 'Script','Writer','Near','Close','Open','Cube','Circle', 'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha', 'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King', 'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb', 'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster', 'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big', 'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken', 'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies', 'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker', 'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice', 'Slash','Melt','Melted','Melting','Fell','Wolf','Hound', 'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox', 'Tanakrit Thongmang', 'เธชเธ. เน€เธกเธ', 'Pat Az', 'เนเธชเธ”เนเธเธฃเธ”เธเธตเธ เธกเธถเธเธญเธขเธฒเธเนเธ”เธเธ–เธตเธเนเธซเธก เธฅเธฐเธชเธฑเธ”', 'เธเธนเธฃเธเธฒ เธจเธฃเธตเธญเนเธญเธ', 'เธงเธฃเธ เธฑเธ—เธฃ เน€เธเธญเธฃเน', 'เธเธฐเนเธกเน เธฅเธทเธกเน€เธ—เธญ', 'เน€เธเธดเธฃเนเธ เธเธฐ', 'เธเธตเธฃเธเธเธฉเน เธฏ.', 'Kaeklit Wandeeya', 'เธญเธขเนเธฒเธกเธญเธเธเธกเน€เธเนเธ เน€เธเธตเธขเธเนเธเนเธ•เธฑเธงเธ•เธฅเธ.', 'เธเธญเธเธเนเธญเธข เนเธ•เนเธเธญเธเธเธฐ', 'Thanapat Mueanrung', 'Grittamath Chaiwuttikon', 'Purachai Kulbutrdee', 'เธเธญเธฅ เธเธญเธฅ', 'เธฃเธฑเธเธฉเน เธ—เนเธฒเธเธฑเธ', 'เธเธฅเธทเนเธก เธชเธธเธงเธฃเธฃเธ“เธ เธนเธ•เธฃเธต', 'Nattawut Thiansungnoen', 'Shukree Samaae', 'Wuttisak Phumjan', 'เธเธกเธเธทเนเธญเน€เธเนเธกเธ—เธดเธจ เนเธเธฃเนเธเธฃเธเนเน€เธฃเธตเธขเธเธเธฑเนเธ', 'เน€เธเธทเนเธญเธเน€เธฃเธฒเธกเธตเธเนเธญเธข เธฃเธญเธเธญเธขเนเธซเนเธกเธฒเธซเธฒ', 'Pee Peerapon', 'Back Peerapat', 'เธเธต เธ•เนเธฒเธฃเน', 'เธ—เธฃเธเธเธฑเธข เธเธธเธเธฃเธญเธ”', 'Sek Sek', 'เธ”.เธ. เธเธกเธเนเธฒ', 'เนเธเนเธงเธฑเธ เธเธฒเธเธ”เธนเน€เน€เธฅเธ”เนเธงเธข', 'เธญเธฒเธฃเนเธก เนเธเธฃเธฃเธนเนเธเนเธฒเธ', 'เธเธต เธฅเธฐเธงเธฑเธ”', 'เน€เธเน€เธฅเน เนเธฅเธ—เน', 'เธเธฒ เน€เธฅเธตเธขเธฃเน', 'Nuttee Saeeaw', 'เธจเธดเธฃเธงเธดเธ—เธขเน เธเธฃเธฐเธเธก', 'Jirapan Kontha', 'เธเธฃเธดเธขเธฒ เนเธเธชเธฒเธงเธฑเธ', 'เธเธฑเธเธเธฒเธเธฃ เน€เธเธฃเธดเธเธชเธธเธ', 'เธ“เธฑเธเธเธฅ เธฏ.', 'เธกเนเธญเธเธญเธขเนเธฒ เนเธ”เนเน€เธเธดเธเธ', 'Wutthiphong Kongsaeng', 'เธเธเธฃเธฑเธ เธ•เธเธเธฅเธฒ', 'Suwan Gannacum', 'เธเธฅเธฒเธเธงเธฑเธเธเธญเธ เธเธฅเธฒเธเธเธทเธเธ”เธตเธ”', 'เธเธนเนเน€เธญเธข เธเธนเนเน€เธญเธข', 'เธเธฑเธ’เธเธเธเธจเน เธ—เธญเธเธกเธตเธเธงเธฑเธ', 'เน€เธญเธก เธกเธต', 'Padungdet Sonwong', 'เนเธญเนเธ  เธเนเธฒเธฒ', 'เธเธญเนเธเธเธฑเธ เน€เธ”เธเธฃเธฑเธเธฉเธฒ', 'Aphirak Manened', 'เธเธฑเธเธงเธฒเธ” เธเธเธเธตเนเธญเธฒเธข', 'เธเนเธฒเธง เนเธเธเธเน', 'เน€เธเธตเธขเธเธเธฑเธเธเน เน€เธเธฉเธกเธเธดเธกเธฅ', 'Wut Theeratphat Dangroing', 'Songkran Songkran Songkran', 'เน€เธกเธ เนเธ เธเธฐเนเธเธฃเธฅเธฐ', 'Thanathon Thongdee', 'เธเธดเธ•เธขเธฒเธเธฒเธก เธเธฃเธฃเธกเธเธธเธ', 'Khamsanouk Latsakoun', 'Pongsorn MT', 'Salawin AP', 'Natthawut Sangpraphan', 'Surasit Thonewut', 'เน€เธฅเธตเธขเธเธเธซเธกเธญเธขเธ•เธดเธ”เธเธฑเธ เน€เธเธญเธเธญเธเธเธงเธฒเธกเธชเธฑเธกเธเธฑเธเธเนเนเธเนเน€เธเธทเนเธญเธ', 'Natthanan Waengsungnoen', 'เนเธกเนเธชเธเธดเธ”เธญเธขเนเธฒ เธ•เธดเธ”เธ•เธฅเธ', 'Narathorn Phuttha', 'Nattawut Philuek', 'เธ เธตเธ เธ เธตเธ', 'เธเธดเธ”เธเธฐเน€เธซเธฅเธตเนเธขเธกเธเธฑเธเธเธก เธเธธเธ“เธ•เนเธญเธเธเธกเธเธงเนเธฒเธเธตเน', 'เนเธญเนเธเธดเธก เธกเธตเน-', 'เน€เธเธดเธฃเนเธช เน€เธ.', 'Sanhwach Khachenchat', 'Tatchapol Kowsupamongkol', 'เน€เธเธเธฃเธฅเธ”เธฒ เธเธธเธกเธเธฒเนเธชเธ', 'Sutthiluk Wongsakhu', 'เธซเธเธธเนเธกเธฃเธฒเธเธฃเธต เธเธฃเธดเธเนเธเนเธกเนเธฅเธญเธเธญ', 'เธงเธฃเธฒเธ เธฃเธ“เน เธฃเธฑเธเน€เธญเน', 'Katkanok Ketwmanee', 'Jirawat Pongoenjarat', 'เธงเธดเธจเธงเธฐ เธเธฑเธเธเธดเธกเธฒเธเธเธ—เน', 'เธฃเธฑเธเธชเธดเธกเธฃเธฃเธ“เน เธเธฅเธฒเธงเธเธจเน', 'AR AZ', 'เธเธดเธง เธเธฐเธเนเธฐ', 'เธญเธธเนเธก เธ—เนเธฒเน€เธฃเธทเธญ', 'Wutthipat Pratubken', 'Ko Pong', 'เธชเนเธกเธ เน€เธเธญเธฃเน', 'เธเธฅเธดเธกเน เธเธเน€เธ”เธดเธก', 'เน€เธ เธชเธเธตเธเธตเนเธฏ.', 'เธงเธตเนเธฃเธ เธฑเธ—เธฃ เธเธฑเธเธเธเธฐ', 'เธเธญเธเธ”เน เธเธธเธ“เธกเธฒ', 'เนเธ—เธข เธเธดเธขเธก', 'Tanakonr Mokkratn', 'เธเธเธเธคเธ•เธด เธญเธดเนเธกเน€เธญเธตเธขเธก', 'Bank Return', 'Pongsapas Ponpimay', 'Intro Soon', 'Kit See You', 'เธเธฃเธฐเธเธตเธก เธกเธฑเธเน€เธฅเธง', 'Chittiphon Ketphaiboon', 'เน€เธเธเธ เธ เธเธฑเธ”เธฉเธธ', 'Fame LN', 'เธญเธฃเธญเธธเธกเธฒ เธ”เธฒเน€เธฅเธดเธจ', 'เธญเธดเธฅเธเธฒเธ เธ”เธญเนเธก', 'Kam Fix', 'เธเธฒเธข เธเธเธจเธเธฃ', 'เธเนเธฒ เธเธฑเธข เน€เธ”เธดเธเธขเธดเนเธก', 'เนเธ เนเธ เธฎเธฒเธฃเนเธ”เธเธญเธฃเน', 'Nuttapon Kaewnin', 'เธญเธฒ.เธฃเธธเนเธ เธเธฃเธฑเธ', 'เนเธเธ—เน เธเธฃเธฑเธเธเธก', 'เธกเธญเธ เนเธกเธ”', 'เธเธฃเธฃเธ“เธเธฃเธฐเธ เธฒ เธเธฑเธ’เธเนเนเธเนเธก', 'Atipol', 'Pasta Kanintorn', 'Tudhdgjf Sfhshehhd', 'Phiraphat Bunyasit', 'เนเธญเธ” เธเธฑเธ—', 'Thanyathorn Atchawaraphorn', 'Krongpop Kon Meeisiri', 'Kajohnsak John', 'เธเธตเธฃเธเธเธจเน เธเธธเธฅเธเธฒเธ', 'เธ เธนเธฃเธดเธเธ—เน เน€เธฅเนเธเธเธฑเธขเธเธฒเธ', 'Piyada Kaewpaniang', 'เธเธตเธ•เนเธฒเธฃเนเธเธธเธ เธฃเธนเนเธขเธฑเธเน€เธเธตเนเธข', 'เธ”เธฃเธตเธก เธชเธฒเธขเธเธธเธ', 'เธ•เธด.เธชเธฒเธขเธเธฑเธเน€เธ—เธดเธ. เธเธเธดเธเธเธธเธฃเธต', 'เน€เธ”เนเธเธ•เธดเธ”เน€เธเธก เน€เธญเธ', 'Pongsathon Yookham', 'เธ—เธเธฒเธข เธชเธฃเธฐเธ—เธญเธเธชเธเธเน', 'Zx Pongkhun', 'Xaiyalat Keobupha', 'เธเธญเธเธเนเธญเธข เนเธฅเนเธงเนเธ', 'LY CY', 'เธ. เธเธดเธง', 'Ternan Bisaek', 'เธ•เนเธเธซเธฅเธดเธง เธเนเธฒเธเธ', 'เนเธเธฃเนเธเธฅเนเธกเนเธกเธต เนเธ•เนเน€เธเธเธเธญเธเธ”เธตเธเธฃเธฐเธเนเธฒเธเธฑเธเธซเธงเธฑเธ”', 'เธญเนเธญเธ เธชเธฃเธฐเธเธธเธฃเธต', 'เธฃเธฒเธเธฒ เน€เธเธดเธเธเนเธญเธ', 'Narin Dungmanee', 'เธจเธธเธ เธ“เธฑเธ เธเธฒเธเธเธเธงเธเธจเน', 'Pooridate Pissapa', 'Boom Boom', 'เธชเธดเธฃเธฐเธ เธฑเธ—เธฃ เธเธธเธ•เธฐเธฃเธฐ', 'Sngkrant Kan', 'FI LM', 'Supavee Yangngern', 'เธชเธธเธฃเธดเธขเธฒ เนเธชเธเธชเธดเธฃเธด', 'Sumate Inta', 'เธเธเธดเธเธฑเธ—เธเน เธเธดเธกเธเธฅเธต', 'เธเนเธฒ เธฃเธญเธ”เธ”เธฒเธงเนเธ”เธ', 'Man Dechathon', 'Liez Aino Umi', 'Natthawut Anantrakunsin', 'เนเธเธฃเธก เธญเธฃเนเธญเธขเน€เธเธข', 'Ain Saycrr', 'เธ“เธฑเธเธเธเธฉเน เน€เธซเธฅเนเธเธกเธฑเนเธ', 'เธ•เธฑเธง เธกเนเธงเธ', 'เนเธญเนเธ เธเธฐเธเธฃเธฑเธ', 'เธเธญเธฅ เธเธฑเธชเธชเธดเนเธ', 'เธ–เธฒเธงเธฃ เนเธเธ•เธฅเธธเธ”', 'เธฃเธดเธ. เธฅเธฒเธข เธฃเนเธฒเธขเธเธฒเธ', 'เน€เน€เธกเธง เน€เน€เธกเธงเนเธเน', 'Phisit Pinpak', 'เธเนเธญเธเธเธธเนเธ เธเธดเธเธเธฑเธเธ—เน', 'เนเธญเน เธ.', 'เธชเธธเธฃเธดเธขเธฒ เนเธเนเธงเธชเธฒเธฃ', 'เธ เธนเธงเน€เธเธจเธงเธฃเน เธซเธดเธฃเธฑเธเธงเธฒเธ“เธดเธเธเธธเธฅ', 'เน€เธญเนเธเนเธกเน เธชเธเนเธฅเธ', 'เธชเธธเธเธฒเธ•เธด เธชเธกเธจเธฃเธตเธฃเธทเนเธ', 'Alak Pradangchat', 'Phelng Pnelng', 'Natirat Labua', 'Naratihop Thapllang', 'เธเธดเธเธด เธจเธดเธฅเธฒเนเธฅเนเธซเน', 'เธเธฒเธข เนเธเนเธซเธเธฒเธง', 'เน€เธเธทเนเธญ เนเธชเธเธชเธงเธฑเธชเธ”เธดเน', 'เธชเธธเธ—เธเธดเธเธฑเธ’เธเน เธฏ.', 'Poom Pongsapak', 'เธกเธดเธ เธฅเนเธกเน€เธเนเธ เธเธฃเนเธฒเธเธเธเธเธ', 'Wasin Kiawsaad', 'Natthapoom Srisuk', 'Krisana Areeauea', 'เธเธเธเธคเธ• เธเนเธณเน€เธเธ•เธฃ', 'Wuttichai Luangsaeng', 'เน€เธญเธเธเธฅ เธเธฅเธดเนเธเธชเธนเธเธเธเน', 'Thanawat Singha', 'เธเธ—เธต เธงเธเธเนเธเธฃเธธเธ‘', 'เธญเธฃเธเธธเธ เนเธชเธงเธเธฅเธฒเธ ', 'เธงเธตเธฃเธเธฑเธข เธเธเธเธฅเธดเนเธ', 'Pongwich Radrodkit', 'เธฃเธฒเธเธฑเธ เธเธฑเธเนเธเนเธง', 'เธเธฃเธดเธเธ—เธฃเน เธเธถเนเธเธเธเธฉเน', 'Alok Tk', 'Pech Love You', 'Korn Nattawut', 'เธจเธธเธ เธ“เธฑเธ เธเธฅเธดเนเธเธเธฑเธเธ—เธฃเน', 'Bouaphaeng Mingsamone', 'Chetadapon Onprom', 'Mak Seeliphokham', 'เนเธญเธก เน€เธเธฑเธ”เธชเธตเธเธงเธ', 'เธเธ•เธธเธฃเธ เธฑเธ—เธฃ เธเธธเธฅเธเธงเธฅ', 'เธงเธดเธเธฑเธข เธ—เธญเธเธงเธฑเธ', 'เธเธฒเธเน€เธ•เนเธข เธชเธดเธ”เธ—เธดเน€เธ”เธ”', 'Thanwa Sukhcitr', 'เธ“เธฑเธ เธเธฅเธฏ', 'เธฃเธฑเธเธเธตเธขเน เธเธธเนเธเน€เธชเธตเธขเธ', 'เธงเธฑเธเธฃเธเธฅ เธขเธดเนเธเธขเธเธเน', 'Mem Chaiwat Kasemsahang', 'Pong Jetsadakorn', 'Jakkarin Inkeaw', 'Tawan Bansra', 'เธงเธธเธ’เธดเธ เธฑเธ—เธฃ เธชเธกเนเธเธก', 'เธเธฅเธทเนเธก เนเธ', 'เธญเธเธธเธเธเธจเน เธเธถเนเธเธเธฒ', 'เธเธดเธง เน€เธ”เนเธเธเธฒเธ”เธ', 'Phichanyut Yuttanasak', 'เธเธฃเธซเธกเธกเธดเธเธ—เธฃเน เน€เธชเธกเธเธณ', 'Puttanpong Chonrut Chonrut', 'Watcharapol Inhom', 'เน€เธฃเธตเธขเธ เธเธนเธงเนเธฒ เธเธตเนเธชเธดเธเธซเน', 'Junior Junior', 'Thanawat Puththwe', 'Poonsawat Chairin', 'เน€เธเธเธฃ เธชเนเธฃ', 'เนเธ— เนเธฅเธเธ.', 'Konyaphon Sriwongsa', 'เธญเธดเธ—เธเธดเธเธฅ เธฏ.', 'Mos Hello', 'เธเธฅเธดเธ เธเธฃเธฑเธ', 'เธชเธฒเธงเธเธดเธ” เธ—เธตเนเธฃเธฑเธ', 'เธเธธเธฅเธเธฑเธเธฃ เธจเธฃเธตเธชเธธเธงเธฃเธฃเธ“เน', 'Thanakorn Kwantong', 'เธ—เธน เธชเธฒเธขเน€เธ”เธตเธขเธง เธชเธฑเธเธเธฑเธ”เธซเธเธญเธเธเธธเนเธข', 'Jetsada Poiearm', 'Chinnaphat Ujai', 'Anuwat Phoyeam', 'Tukdanai Hunting', 'เธเธเธดเนเธเธ เธจเธดเธฃเธดเธงเธฑเธ’เธเธฒเธเธงเธดเธฅเธ—เน', 'เธเนเธฒเธ เนเธเธงเธฑเธเธ”เธต', 'เน€เธเธตเธขเธฃเนเธชเธฒเธขเธเธดเธง เธเธดเธ”เธซเธกเธ”เธเธฅเธญเธ', 'เธเนเธญเธ เธ.', 'Non Non', 'เธฅเธนเธเธญเธตเธชเธฒเธข เธฎเธฑเธเธเนเธฒเธเน€เธเธดเธ”', 'เธจเธธเธ เธ“เธฑเธ เนเธเธฃเธธเนเธ', 'Rapeephat Pusakon', 'เธชเธธเธฃเธเธฑเธจ เธเธดเธเธ”เธงเธ', 'Manatanan Thong-in', 'เธเนเธญเธเน€เธเน€เธ เธเธเธซเธฅเนเธญ เนเธเธฅเนเธฐ', 'Watcharakorn Auphoncharoen', 'เธเธธเธ’เธดเน€เธกเธ เธเธเธฐเธ เธฑเธเธ”เธดเน', 'Ammika Udpang', 'เธเธฑเธเธงเธธเธ’เธด เธเธฅเธฑเธเธเธฃเธฃเธกเธเธฒเธ•เธด', 'เนเธเธเธฒเธ เธญเธขเนเธฒเธเธฒเธเน€เธเนเธ', 'Phanumet Pinyo', 'เธ“เธฑเธเธงเธธเธ•เธด เธ”เธตเธเธเธขเธฒเธงเธเธฒเธก', 'เน€เธเธเนเธญเธข เธฃเนเธญเธขเธฃเธตเธฅเธฒ', 'Kittihon Kamharit', 'เธเธดเธง เธเธฐ', 'เธกเธญเธช เธเธฃเธฒเธฒเธเธ', 'เธ‘เธดเธเธฒเธ เธฃเธ“เน เน€เธฃเธเธฃเนเธญเธ เน€เธเธเธฃเน', 'Sirisak Makjinda', 'เนเธเน เธเนเธญเธข', 'Sirimongkol Chansongsang', 'Thanaphat Pinakano', 'เน€เธญเธดเธฃเนเธ เธเธเธฑเธ', 'เน€เธฃเธฒเน€เธเนเธเนเธเธฃ เน€เธฃเธฒเน€เธเนเธเนเธเธฃเธเนเนเธกเนเธฃเธนเน', 'เธ—เธเธฒเธเธฃ เธงเธดเธฃเธดเธขเธฐเธญเธณเธเธ', 'เธ“เธฑเธเธเนเธงเธฑเธ’เธเน เธชเธฒเธฃเธฒเน€เธฅเธดเธจ', 'เธเธฐเนเธซเธฅเธ เธ”เธต', 'เธเธขเธฒเธเน เธเธฅเธดเนเธเธเธดเธกเธฅ', 'เธเธทเนเธญเธเนเธญเธ เธญเนเธฐเธเธฃเธฑเธ', 'เธฃเธฑเธเธเธฃเธฃเธกเธเธธเธ เธเธธเนเธเธเธฒเนเธเธ', 'เธจเธธเธ เธฑเธ เธชเธดเธฃเธงเธ“เธดเธเธขเน', 'เธญเธฑเธ‘เธ’เธเธฃ เธฃเธตเธเธฑเธขเธงเธดเธเธดเธ•เธฃเธเธธเธฅ', 'Phonthakorn Suphom', 'เธเธเธ เธฑเธ—เธฃ เธฃ.เธฏ', 'Pakawat Jaisutti', 'Teerapat Boriran', 'Khaogla Srilittisakul', 'Oat Thanadech', 'Phatthapol Seemuangngam', 'Nattharikt Ratrin', 'Ken Kkm', 'Pataraporn Srinaunin', 'Phuwanat Champakaew', 'Suwit Khampirom', 'Pun Punnaphop', 'เธเธดเธ•เธ•เธดเธเธฑเธข เธเธฅเนเธฒเธขเน€เธเนเธเธฃ', 'Padpon Santhueankaew', 'เนเธกเนเธเธญเธ เธเธทเนเธญเธซเธฃเธญเธ', 'Bick Phng', 'เธเธฃเธเธ เธ.', 'Peerapat Suwanmalai', 'เธเธฑเธขเธเธฅ เน€เธกเธทเธญเธเธ—เธญเธ', 'Kittidet Thongbo', 'เน€เน€เธฅเนเธงเนเธเธ เธเธฐเนเธเธฃเธฅเนเธฐ', 'เธเธฅเธเธดเธ เธฒ เธฃเธฑเธเธฉเธฒเธเธธเธ', 'เธเธดเธง เธเธฃเธฃเธกเธฃเธฑเธ•เธเน', 'Suphachip Nunoi', 'Siripong Puangton', 'Korlid Promprasatsorn', 'เธเธดเธ เน€เธเน€เธฃ.', 'Pakinai Srijaroon', 'เธญเธฑเธเธฃเธเธฑเธเธเน เนเธเนเธงเธเธฑเธเธ—เธฃเน', 'เธเธฒเธ เธเธฒเธ', 'เธเธเธฒเธเธฃ เนเธเนเธงเธญเธธเธ”เธก', 'เธกเธตเน€เน€เธเธเน€เธ•เธตเธข เธ”เธตเธเธงเนเธฒเธกเธตเนเน€เน€เธเธเน€เธฅเธง', 'เธ•.เธ เธกเธฒเนเธ”เนเนเธ', 'เนเธญเธก เธเธฑเธ', 'เธเนเธฒเธซเธฅเธฑเธเธเธ เธฃเธฑเธเนเธ—เนเธ•เนเธญเธเน€เธชเธตเธขเธชเธฅเธฐ', 'เธ”เธเธเธฃเธฒเธเธ เธฅเนเธฒเธเธฒเธเธ', 'Ratsuda Jaisue', 'เธกเธดเธชเน€เธ•เธญเธฃเน เธกเธดเธงเธชเธดเธ', 'Adisak Khampuan', 'Noppanun Kummaungpook', 'เธ”.เธ. เนเธ•เนเธ เธเนเธฒเธเธเธก', 'Topchat Wong', 'Suradech Pila', 'เธเธตเธฃเธ เธฑเธ— เธฃ.', 'เธเธดเธ•เธ•เธดเธเธฑเธเธเธธเน เธเธกเธกเธต', 'เธชเธธเธเธคเธฉเธเธดเน เธชเธธเธงเธฃเธฃเธ“เน€เธ—เธ', 'Tanaphat Kwansrisut', 'Been Ben', 'Teerapat Janhan', 'Nattawut Lengthaisong', 'Kiattisak Khamma', 'เธเธงเน€เธฃเธจ เธเธฅเธฑเธเธเธฒเธก', 'เธงเธ—เธฑเธเธเธน เน€เธซเธกเธทเธญเธเธ—เธญเธ', 'Wittawat Pondet', 'เน€เธเธตเนเธขเธก เน€เธเธตเนเธขเธก', 'Pichayon Thida', 'เธเธขเธธเธ• เธฃเธฑเธเธฉเธฒเธเธฅ', 'เธเธ“เธเธจ เน€เธเนเธฒเธเธฑเธข', 'Dunk Sittsak', 'Nathapol Nakram', 'Nuchy Techinee', 'เนเธกเธเธขเธน เนเธเธกเน€เธเธฅเธฒ', 'เธฃเธฑเธเนเธกเนเนเธ”เน เธซเธฃเธทเนเธกเน เนเธ”เนเธฃเธฑเธ', 'เธซเธเนเธฒเธ•เธฒเธเธญเนเธซเธง เธเธเธฒเธ”เนเธเนเธขเธฑเธเธฃเนเธญเธเธเธฃเธตเนเธ”', 'Thanakit Ketsuwannaphon', 'Doluk Good Person', 'เธฃเธธเนเธเธ•เธฐเธงเธฑเธ เธเธณเธเธฒเธเธเธนเธ”เธเธฒ', 'เธงเธฃเธดเธจ เธฃเธฑเธ•เธเนเธชเธ เธฒ', 'เธงเธฑเธเธฃเธฒเธเธฃ เธชเธดเธเธซเนเธชเธตเธ”เธฒ', 'Natthaphon Khamnuengphon', 'Pattrapon Vuttiya', 'Orde Rthis', 'Tananpisit Yaoduang', 'เธเธนเธเธเน€เธ”เธดเธก เน€เธเธดเนเธกเน€เธ•เธดเธก เธเธทเธญเธเธงเธฒเธกเน€เธฅเธง', 'Korn Tanadit', 'Saharat Puengpakvan', 'FI LM', 'เนเธ•เน เนเธ•เน', 'เธเธฅเธธเนเธ เธชเธฒเธกเนเธเธ”', 'Wacharachai Ngamlon', 'Tanachai Pungnam', 'Souksavanh Vongphachanh', 'เน€เธ”เธเธงเธดเธ—เธขเน เธ—เธญเธเธเธฅเนเธณ', 'Pheemarut Khunsetthi', 'เธเธตเธฃเธงเธฑเธ• เธกเธตเธ เธนเธกเธด', 'Nattakorn Tongtun', 'เธเธฑเธเธงเธฒ เธเธฒเธฃเธ”เธนเธเธฒเธ•เธด', 'เธ. เธเธญเธ', 'เธเธฒเธเธ เธกเธฑเนเธเธซเธกเธฒเธข', 'Gungun Tapan', 'Judy Puangkhan Naja', 'เธเธฑเธเธฃเธดเธเธ—เธฃเน เน€เธเนเธเนเธเนเธก', 'Ome Parawee', 'เธเธน เธ”เธตเนเธ”เน เธเธนเธ”เธตเนเธเธเธฒเธเนเธฅเนเธง', 'Pongphet Mali-on', 'Warakorn Suwan', 'เธเธกเธเธทเนเธญ เธญเธฐเนเธฃ เธเนเนเธกเนเธฃเธนเน', 'เธ“เธฑเธเธเธเธ—เน เธเธฃเธฒเธเธ—เธดเธเธขเน', 'Anankon Klang', 'Weerapap Pholboon', 'Sirasilp Phophiroj', 'เนเธกเนเธฃเธนเน เนเธกเนเธกเธต เนเธกเนเน€เธซเนเธ', 'เธเธฑเธเธขเธญเธกเธ—เธธเธเธญเธขเนเธฒเธ เน€เธฅเธขเธเธฐเธเธเธ”เธต', 'เธเธฒเธเธดเธจเธฒ เธเธฐเธเธฒ', 'เธเธฒเธ•เธฃเธต เธเธดเธเธฒเธเธดเธ—เธขเน', 'เธเธฑเธเธเธงเธธเธ’เธด เนเธ—เธเธฑเธเธเน', 'เน€เธเธฒเธงเธเธดเธ• เธฅเธธเธเธจเธฑเธเธ”เธดเน', 'Poonyapat Saengbuaphuean', 'เธเธฑเธเธ—เน เธเธฑเธเธ—เน', 'เธ—เธฑเธเธ—เธดเธก เธ—เธฒเนเธฃเน', 'เธชเธฃเธจเธดเธฃเธด เน€เธชเธเธฒเธฐเน€เธชเธตเธขเธ', 'เธซเธงเธฒเธ เธชเน€เธ•เน€เธ”เธตเธขเธก', 'เธเนเธญเธ• เธเธดเธ•เธดเธจเธฑเธเธ”เธดเน เธเธฃเธตเธ”เธตเธเธฃเธนเธเน', 'เธเธณเธฅเธฑเธเธชเธฃเนเธฒเธ เธกเธญเธเธเนเธฒเธกเนเธเธเนเธญเธ', 'Jakkri Thongdee', 'Ton Ton', 'Thanaphat Anurak', 'Thanaporn Sonwongsri', 'Love Pattaya', 'Chimo Surayut', 'เธเธงเธฃเธดเธจเธฃเน เธเธฅเนเธฒเธจเธถเธ', 'Chayanon Priwanang', 'เธ“เธเธเธฃ เธฃเธฒเธเธเธฒเธเธต', 'เธเธฒ เธฅเนเธฒ', 'เธ”เธดเธง เธเธเน€เธ”เธดเธก', 'เธชเธธเธเธฑเธเธเธฒ เธเธดเธ•เธฃเนเธเนเธ', 'เธเธธเธซเธฅเธฒเธ เนเธ', 'Okmn Obhg Opliu', 'เธเนเธฒเนเธช เธชเนเธกเน€เธเธฅเธตเนเธขเธ', 'เนเธญเธก เธเธฃเธฑเธ', 'Ariya Kraitree', 'Lucky Love', 'Burapha Himwan', 'เธเธ“เธดเธ”เธฒ เนเธชเธ เธฒ', 'เธเนเธฒ เธญเธฒเธฃเนเธ•', 'เธเนเธญเธเธงเธฒ เน€เธ—เธ', 'Phongsakan Suriwong', 'Yuthapong Tunnok', 'เธเธญเธกเธ—เธฑเธ เธเธฃเธฐเธ—เธฒเธ', 'Jimmy Phosalard', 'เธชเธดเธฃเธ เธฑเธ—เธฃ เนเธเธกเธฅ', 'เธญเธฐเธ•เธญเธก เธเธฑเธ', 'Thanakrit Sabyen', 'Nichanan Munsanit', 'Jirawat Meksut', 'เธซเธฅเธญเธเธ”เธด เธซเธฃเธญเธเธฑเธ', 'เธ•เนเธเธเนเธฒเธง เธเธฃเธฑเธ', 'เธญเธฃเธฃเธ–เธเธฅ เธฏ.', 'เธเธดเธขเธฐเธฃเธฒเธ เธเธฑเธเธเธฒเธงเธเธตเธฃเธเธฃเธฃเธก', 'Trakan Seanmangin', 'Phithaya Bunga', 'Kittinun Tae', 'Pun Smilely', 'Porrawich Phromma', 'เธเธฑเธเธเธดเนเธ เน€เธเธกเธชเนเธกเธดเนเธ', 'Napasak Min', 'เธเธเธเธฃ เธเธฐเน€เธเธเธ—เธฃเน', 'เธ—เธฑเธจเธ“เธฐ เน€เน€เธชเธเธชเธธเธงเธฃเธฃเธ“เน', 'เธเธฑเธเธเธฒเธเธฃ เธเธฃเธฒเธเธ เธฑเธข', 'เธกเธดเธเธ—เธฃเนเธ—เธฐเธ”เธฒ เธเธณเธเธฐเธฅเธต', 'เธเธฐ เธเธธเธกเธฃเธฑเธก', 'เธ เธนเธกเธดเธเธ—เธฃเน เน€เธ—เธเธญเธญเธ', 'เธฃเธงเธตเนเธฃเธเธเน เธเธญเน€เธซเธเธตเนเธขเธงเธเธฅเธฒเธ', 'เธเธฒเน€เธ•เน เน€เธ”เนเธเธเธฑเธ—เธฅเธธเธ', 'Suchakree Sankla', 'Chinnaphat Samarng', 'เธเธดเธเธเธบเธเธเธ“เธฒเธเธเน เน€เธเธทเธญเธซเธเธฉเน', 'เธเธฒเธขเธเธตเนเธฅเธ. เนเธ”เธ', 'Pond Anuphong', 'เธญเธ”เธดเธชเธฃ เธเธฃเธซเธกเนเธเธฃเธชเธ“เธ—เน', 'เธเธดเธ•เธดเธเธฃ เธเธดเธ•เธ•เนเน€เธเธเธเธฒเธฃ', 'Phiraphat Mailueang', 'เธงเธฑเธเธฃเธงเธตเธฃเน เธชเธฅเธฑเธ”เนเธ”', 'Gooe Bee', 'เธเธ เนเธ', 'เธ เธฒเธเธธเธงเธฑเธ’เธเน เธกเธธเธเธเธธเธ“', 'Ding Boyknu', 'เธเธฒเธข เธเธดเธ” เน€เธชเธกเธญ', 'เธเธ เธซเธฅเธฑเธเธ–เธเธ', 'เธเธดเธ•เธ•เธดเธเธเธเน เธเธเธเธฑเธ', 'Bas Bas Bas', 'เนเธกเนเธเธนเธ”เธกเธฒเธ เน€เธเนเธเธเธญ', 'เธเธฒเธฃ เน€เน€เธกเธง', 'Khon Sihachak', 'เธเธตเธฃเธเธเธฉเน เนเธชเธเธเธฅเนเธฒ', 'เธ เธฒเธเธธเธงเธฑเธ’เธเน เน€เธญเธตเนเธขเธกเธชเธณเธญเธฒเธเธเน', 'เธฃเธธเนเธเธคเธ—เธฑเธข เธเธฃเธฃเธกเธเธธเธฅ', 'เธเนเธญเธเน€เธเธฃเธ เน€เธ”เนเธเนเธเธฃเธฒเธ', 'Thanawat Suksawad', 'เธเธตเธฃเธฐเธเธเธจเน เธเธญเธ เธชเธธเธเธฑเธเธเธฒ', 'Nuttawat Maimard', 'เธเธฒเธฃเนเธ•เธนเธ เน€เธ”เนเธเธเธฃเธฐเนเธเธ', 'Nong Omyim', 'Chanoknan Kanphookiaw', 'Nitikorn Yuantyee', 'Waritnun Choosuk', 'Vasin Maneenak', 'Krisda Champasak', 'เธ—เธดเธเธงเธฑเธฅเธขเน เธเธดเธฃเธดเธขเธฒเธเธฒเธก', 'เธเธฑเธเธงเธฑเธ’ เธเน.', 'Drone Suporn', 'เนเธเนเธ• เนเธ', 'Sutthikan Phensuwan', 'เธ“เธฑเธเธ เธนเธกเธด เธ—เธนเธฅเนเธฃเธ', 'เธเธตเธฃเธงเธฑเธ’เธเน เธ เธนเธกเธดเธเธญเธ', 'เธ”.เธ. เธ.เธ•.เธ . เธญเธฐเนเธฃเธเนเนเธกเนเธฃเธนเน', 'Tonnam Wutthipat', 'SC T Mipag', 'เธงเธฑเธเธฃเธเธฅ เธเธฑเธเธ เธดเธ เธฑเธเธ”เธดเน', 'Suphakit Supha', 'Thattana Na Nakorn', 'เน€เธขเธฒเธงเธฃเธฒเธ เธงเธฑเธเธชเธดเธเธชเธนเน', 'เธเธฑเธเธ—เธ เธ เนเธเธฅเธเธ”เธต', 'เธเธฑเธเธเธเธฒ เธ“เน.', 'Snwannapoom Lumyai', 'เธเธเธฉเน เธเธเธเนเธฒเธเนเธฒเธเธญเธเธญ', 'Chanaphol Jina', 'เธเธฑเธ.เธ เธเธงเธข.เธข', 'เธเธดเธ•เธฃเธเธฃ เธเธฒเธเธฒเธเธ' ];
  var Username = UserList.random(UserList.length)
  var bets = ['win', 'lost']
  var betsr = bets.random(bets.length)
  var wagers = [20, 20, 20, 20]
  var wagersr = wagers.random(bets.length)
  var betst = '';
  var betsc = '';
  var wager = '';
  var payout = '';
  if(betsr == 'win'){betst = '';betsc = 'jss188';var wager = wagersr;var payout =85;}else if(betsr == 'lost'){betst = '-';betsc = '';var wager = wagersr;var payout = wagersr;}
  var d = new Date();
  var timesl = d.toLocaleTimeString().substring(0,5);
  var $tbody1 = $("table.jss156 tbody")
  var $last1 = $tbody1.find('tr:last');
  if($last1.attr('class') == 'jss196' || $last1.attr('class') == 'jss196 normal'){ctabletr = '';}else{ctabletr = 'jss196';}
  $('<tr class="'+ctabletr+'"> <td class="jss190"><span class="jss189 jss190">'+gamename+'</span></td> <td class="jss184 jss195"><span class="jss189"><a class="MuiTypography-root MuiLink-root MuiLink-underlineNone jss756 jss192 MuiTypography-colorPrimary" href="/"><span>'+Username.substring(0,7)+'****</span></a></span></td> <td class="jss194"><span class="jss189">'+timesl+'</span></td> <td class="jss194"><span class="jss189"><i class="fa fa-btc" aria-hidden="true"></i>'+wager +' <img class="jss186" src="/images/bit-zgame-crop.png"></span></td> <td class="jss194"><span class="jss189">0.00x</span></td> <td class="'+betsc+'"><span class="jss189">'+betst+'<i class="fa fa-btc" aria-hidden="true"></i>'+payout +' <img class="jss186" src="/images/bit-zgame-crop.png"></span></td> </tr>')
	 .hide()
	 .prependTo('table.jss156 tbody')
	 .fadeIn("slow")
	 .addClass('normal');
  if($last1.is(':first-child')){}else{$last1.remove()}
  var timeslist = [500, 1000, 2000, 3000, 4000, 5000]
  clearInterval(IntervalVar);
  IntervalVar = setInterval(loadlisttb, timeslist.random(timeslist.length));
}
function setlisttb() {var i;for (i = 0; i < 11; i++) {loadlisttb();}}
var IntervalVar = 0;
$(window).load(function() {
 //setlisttb();
 $("#loader").fadeOut("slow");
})
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
} : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function (e, t) {
    "use strict";
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = ge.type(e);
        return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return ge.isFunction(t) ? ge.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? ge.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? ge.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n
        }) : Ae.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function (e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function a(e) {
        var t = {};
        return ge.each(e.match(Ne) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function c(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function l(e, t, n, r) {
        var i;
        try {
            e && ge.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && ge.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        ne.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), ge.ready()
    }

    function h() {
        this.expando = ge.expando + h.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Le.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace($e, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = d(n)
                } catch (e) { }
                Re.set(e, t, n)
            } else n = void 0;
        return n
    }

    function g(e, t, n, r) {
        var i, o = 1,
            s = 20,
            a = r ? function () {
                return r.cur()
            } : function () {
                return ge.css(e, t, "")
            },
            c = a(),
            u = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
            l = (ge.cssNumber[t] || "px" !== u && +c) && He.exec(ge.css(e, t));
        if (l && l[3] !== u) {
            u = u || l[3], n = n || [], l = +c || 1;
            do {
                o = o || ".5", l /= o, ge.style(e, t, l + u)
            } while (o !== (o = a() / c) && 1 !== o && --s)
        }
        return n && (l = +l || +c || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = l, r.end = i)), i
    }

    function m(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = We[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), We[r] = i, i)
    }

    function v(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Pe.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ue(r) && (i[o] = m(r))) : "none" !== n && (i[o] = "none", Pe.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? ge.merge([e], n) : n
    }

    function b(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Pe.set(e[n], "globalEval", !t || Pe.get(t[n], "globalEval"))
    }

    function w(e, t, n, r, i) {
        for (var o, s, a, c, u, l, f = t.createDocumentFragment(), h = [], d = 0, p = e.length; d < p; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === ge.type(o)) ge.merge(h, o.nodeType ? [o] : o);
                else if (Xe.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), a = (Ke.exec(o) || ["", ""])[1].toLowerCase(), c = Ye[a] || Ye._default, s.innerHTML = c[1] + ge.htmlPrefilter(o) + c[2], l = c[0]; l--;) s = s.lastChild;
                    ge.merge(h, s.childNodes), s = f.firstChild, s.textContent = ""
                } else h.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = h[d++];)
            if (r && ge.inArray(o, r) > -1) i && i.push(o);
            else if (u = ge.contains(o.ownerDocument, o), s = y(f.appendChild(o), "script"), u && b(s), n)
                for (l = 0; o = s[l++];) Ve.test(o.type || "") && n.push(o);
        return f
    }

    function _() {
        return !0
    }

    function T() {
        return !1
    }

    function x() {
        try {
            return ne.activeElement
        } catch (e) { }
    }

    function E(e, t, n, r, i, o) {
        var s, a;
        if ("object" == (void 0 === t ? "undefined" : _typeof(t))) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) E(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = T;
        else if (!i) return e;
        return 1 === o && (s = i, i = function (e) {
            return ge().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = ge.guid++)), e.each(function () {
            ge.event.add(this, t, i, r, n)
        })
    }

    function A(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? ge(">tbody", e)[0] || e : e
    }

    function C(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function S(e, t) {
        var n, r, i, o, s, a, c, u;
        if (1 === t.nodeType) {
            if (Pe.hasData(e) && (o = Pe.access(e), s = Pe.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; n < r; n++) ge.event.add(t, i, u[i][n])
            }
            Re.hasData(e) && (a = Re.access(e), c = ge.extend({}, a), Re.set(t, c))
        }
    }

    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function N(e, t, r, i) {
        t = oe.apply([], t);
        var o, s, a, c, u, l, f = 0,
            h = e.length,
            d = h - 1,
            p = t[0],
            g = ge.isFunction(p);
        if (g || h > 1 && "string" == typeof p && !de.checkClone && nt.test(p)) return e.each(function (n) {
            var o = e.eq(n);
            g && (t[0] = p.call(this, n, o.html())), N(o, t, r, i)
        });
        if (h && (o = w(t, e[0].ownerDocument, !1, e, i), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (a = ge.map(y(o, "script"), C), c = a.length; f < h; f++) u = o, f !== d && (u = ge.clone(u, !0, !0), c && ge.merge(a, y(u, "script"))), r.call(e[f], u, f);
            if (c)
                for (l = a[a.length - 1].ownerDocument, ge.map(a, k), f = 0; f < c; f++) u = a[f], Ve.test(u.type || "") && !Pe.access(u, "globalEval") && ge.contains(l, u) && (u.src ? ge._evalUrl && ge._evalUrl(u.src) : n(u.textContent.replace(it, ""), l))
        }
        return e
    }

    function I(e, t, n) {
        for (var r, i = t ? ge.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ge.cleanData(y(r)), r.parentNode && (n && ge.contains(r.ownerDocument, r) && b(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function O(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || at(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || ge.contains(e.ownerDocument, e) || (s = ge.style(e, t)), !de.pixelMarginRight() && st.test(s) && ot.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function B(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function j(e) {
        if (e in dt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;)
            if ((e = ht[n] + t) in dt) return e
    }

    function P(e) {
        var t = ge.cssProps[e];
        return t || (t = ge.cssProps[e] = j(e) || e), t
    }

    function R(e, t, n) {
        var r = He.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function L(e, t, n, r, i) {
        var o, s = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += ge.css(e, n + Me[o], !0, i)), r ? ("content" === n && (s -= ge.css(e, "padding" + Me[o], !0, i)), "margin" !== n && (s -= ge.css(e, "border" + Me[o] + "Width", !0, i))) : (s += ge.css(e, "padding" + Me[o], !0, i), "padding" !== n && (s += ge.css(e, "border" + Me[o] + "Width", !0, i)));
        return s
    }

    function $(e, t, n) {
        var r, i = at(e),
            o = O(e, t, i),
            s = "border-box" === ge.css(e, "boxSizing", !1, i);
        return st.test(o) ? o : (r = s && (de.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + L(e, t, n || (s ? "border" : "content"), r, i) + "px")
    }

    function q(e, t, n, r, i) {
        return new q.prototype.init(e, t, n, r, i)
    }

    function H() {
        gt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(H) : e.setTimeout(H, ge.fx.interval), ge.fx.tick())
    }

    function M() {
        return e.setTimeout(function () {
            pt = void 0
        }), pt = ge.now()
    }

    function U(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Me[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function F(e, t, n) {
        for (var r, i = (K.tweeners[t] || []).concat(K.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function W(e, t, n) {
        var r, i, o, s, a, c, u, l, f = "width" in t || "height" in t,
            h = this,
            d = {},
            p = e.style,
            g = e.nodeType && Ue(e),
            m = Pe.get(e, "fxshow");
        n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
            s.unqueued || a()
        }), s.unqueued++ , h.always(function () {
            h.always(function () {
                s.unqueued-- , ge.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], mt.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    g = !0
                }
                d[r] = m && m[r] || ge.style(e, r)
            } if ((c = !ge.isEmptyObject(t)) || !ge.isEmptyObject(d)) {
                f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = m && m.display, null == u && (u = Pe.get(e, "display")), l = ge.css(e, "display"), "none" === l && (u ? l = u : (v([e], !0), u = e.style.display || u, l = ge.css(e, "display"), v([e]))), ("inline" === l || "inline-block" === l && null != u) && "none" === ge.css(e, "float") && (c || (h.done(function () {
                    p.display = u
                }), null == u && (l = p.display, u = "none" === l ? "" : l)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                })), c = !1;
                for (r in d) c || (m ? "hidden" in m && (g = m.hidden) : m = Pe.access(e, "fxshow", {
                    display: u
                }), o && (m.hidden = !g), g && v([e], !0), h.done(function () {
                    g || v([e]), Pe.remove(e, "fxshow");
                    for (r in d) ge.style(e, r, d[r])
                })), c = F(g ? m[r] : 0, r, h), r in m || (m[r] = c.start, g && (c.end = c.start, c.start = 0))
            }
    }

    function z(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = ge.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = ge.cssHooks[r]) && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function K(e, t, n) {
        var r, i, o = 0,
            s = K.prefilters.length,
            a = ge.Deferred().always(function () {
                delete c.elem
            }),
            c = function () {
                if (i) return !1;
                for (var t = pt || M(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, s = 0, c = u.tweens.length; s < c; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), o < 1 && c ? n : (c || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: ge.extend({}, t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: pt || M(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ge.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            l = u.props;
        for (z(l, u.opts.specialEasing); o < s; o++)
            if (r = K.prefilters[o].call(u, e, l, u.opts)) return ge.isFunction(r.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(r.stop, r)), r;
        return ge.map(l, F, u), ge.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), ge.fx.timer(ge.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function V(e) {
        return (e.match(Ne) || []).join(" ")
    }

    function Y(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function X(e, t, n, r) {
        var i;
        if (Array.isArray(t)) ge.each(t, function (t, i) {
            n || kt.test(e) ? r(e, i) : X(e + "[" + ("object" == (void 0 === i ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ge.type(t)) r(e, t);
        else
            for (i in t) X(e + "[" + i + "]", t[i], n, r)
    }

    function Q(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (ge.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function G(e, t, n, r) {
        function i(a) {
            var c;
            return o[a] = !0, ge.each(e[a] || [], function (e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || s || o[u] ? s ? !(c = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), c
        }
        var o = {},
            s = e === qt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function J(e, t) {
        var n, r, i = ge.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && ge.extend(!0, e, r), e
    }

    function Z(e, t, n) {
        for (var r, i, o, s, a = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    c.unshift(i);
                    break
                } if (c[0] in n) o = c[0];
        else {
            for (i in n) {
                if (!c[0] || e.converters[i + " " + c[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== c[0] && c.unshift(o), n[o]
    }

    function ee(e, t, n, r) {
        var i, o, s, a, c, u = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = l.shift())
                if ("*" === o) o = c;
                else if ("*" !== c && c !== o) {
                    if (!(s = u[c + " " + o] || u["* " + o]))
                        for (i in u)
                            if (a = i.split(" "), a[1] === o && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                                !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0], l.unshift(a[1]));
                                break
                            } if (!0 !== s)
                        if (s && e.throws) t = s(t);
                        else try {
                            t = s(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + c + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        re = Object.getPrototypeOf,
        ie = te.slice,
        oe = te.concat,
        se = te.push,
        ae = te.indexOf,
        ce = {},
        ue = ce.toString,
        le = ce.hasOwnProperty,
        fe = le.toString,
        he = fe.call(Object),
        de = {},
        pe = "3.2.1",
        ge = function e(t, n) {
            return new e.fn.init(t, n)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        be = function (e, t) {
            return t.toUpperCase()
        };
    ge.fn = ge.prototype = {
        jquery: pe,
        constructor: ge,
        length: 0,
        toArray: function () {
            return ie.call(this)
        },
        get: function (e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return ge.each(this, e)
        },
        map: function (e) {
            return this.pushStack(ge.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: te.sort,
        splice: te.splice
    }, ge.extend = ge.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == (void 0 === s ? "undefined" : _typeof(s)) || ge.isFunction(s) || (s = {}), a === c && (s = this, a--); a < c; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], r = e[t], s !== r && (u && r && (ge.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && ge.isPlainObject(n) ? n : {}, s[t] = ge.extend(u, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, ge.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () { },
        isFunction: function (e) {
            return "function" === ge.type(e)
        },
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e) || (t = re(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || fe.call(n) !== he))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? ce[ue.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e)
        },
        globalEval: function (e) {
            n(e)
        },
        camelCase: function (e) {
            return e.replace(ve, "ms-").replace(ye, be)
        },
        each: function (e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : ae.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var i, o, s = 0,
                a = [];
            if (r(e))
                for (i = e.length; s < i; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e)) return r = ie.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(ie.call(arguments)))
            }, i.guid = e.guid = e.guid || ge.guid++ , i
        },
        now: Date.now,
        support: de
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ce["[object " + t + "]"] = t.toLowerCase()
    });
    var we = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, c, l, h, d = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : q) !== I && N(t), t = t || I, B)) {
                if (11 !== p && (c = ge.exec(e)))
                    if (i = c[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (d && (s = d.getElementById(i)) && L(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), n
                    } if (w.qsa && !W[e + " "] && (!j || !j.test(e))) {
                        if (1 !== p) d = t, h = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = $), l = E(e), o = l.length; o--;) l[o] = "#" + a + " " + f(l[o]);
                            h = l.join(","), d = me.test(e) && u(t.parentNode) || t
                        }
                        if (h) try {
                            return Q.apply(n, d.querySelectorAll(h)), n
                        } catch (e) { } finally {
                                a === $ && t.removeAttribute("id")
                            }
                    }
            }
            return C(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[$] = !0, e
        }

        function i(e) {
            var t = I.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) _.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function l() { }

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = M++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || s) return e(t, n, i);
                return !1
            } : function (t, n, c) {
                var u, l, f, h = [H, a];
                if (c) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || s) && e(t, n, c)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || s)
                            if (f = t[$] || (t[$] = {}), l = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = l[o]) && u[0] === H && u[1] === a) return h[2] = u[2];
                                if (l[o] = h, h[2] = e(t, n, c)) return !0
                            } return !1
            }
        }

        function d(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, s = [], a = 0, c = e.length, u = null != t; a < c; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), u && t.push(a)));
            return s
        }

        function m(e, t, n, i, o, s) {
            return i && !i[$] && (i = m(i)), o && !o[$] && (o = m(o, s)), r(function (r, s, a, c) {
                var u, l, f, h = [],
                    d = [],
                    m = s.length,
                    v = r || p(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? v : g(v, h, e, a, c),
                    b = n ? o || (r ? e : m || i) ? [] : s : y;
                if (n && n(y, b, a, c), i)
                    for (u = g(b, d), i(u, [], a, c), l = u.length; l--;)(f = u[l]) && (b[d[l]] = !(y[d[l]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [], l = b.length; l--;)(f = b[l]) && u.push(y[l] = f);
                            o(null, b = [], u, c)
                        }
                        for (l = b.length; l--;)(f = b[l]) && (u = o ? J(r, f) : h[l]) > -1 && (r[u] = !(s[u] = f))
                    }
                } else b = g(b === s ? b.splice(m, b.length) : b), o ? o(null, s, b, c) : Q.apply(s, b)
            })
        }

        function v(e) {
            for (var t, n, r, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, c = h(function (e) {
                return e === t
            }, s, !0), u = h(function (e) {
                return J(t, e) > -1
            }, s, !0), l = [function (e, n, r) {
                var i = !o && (r || n !== k) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
                return t = null, i
            }]; a < i; a++)
                if (n = _.relative[e[a].type]) l = [h(d(l), n)];
                else {
                    if (n = _.filter[e[a].type].apply(null, e[a].matches), n[$]) {
                        for (r = ++a; r < i && !_.relative[e[r].type]; r++);
                        return m(a > 1 && d(l), a > 1 && f(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, a < r && v(e.slice(a, r)), r < i && v(e = e.slice(r)), r < i && f(e))
                    }
                    l.push(n)
                } return d(l)
        }

        function y(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function (r, s, a, c, u) {
                    var l, f, h, d = 0,
                        p = "0",
                        m = r && [],
                        v = [],
                        y = k,
                        b = r || o && _.find.TAG("*", u),
                        w = H += null == y ? 1 : Math.random() || .1,
                        T = b.length;
                    for (u && (k = s === I || s || u); p !== T && null != (l = b[p]); p++) {
                        if (o && l) {
                            for (f = 0, s || l.ownerDocument === I || (N(l), a = !B); h = e[f++];)
                                if (h(l, s || I, a)) {
                                    c.push(l);
                                    break
                                } u && (H = w)
                        }
                        i && ((l = !h && l) && d-- , r && m.push(l))
                    }
                    if (d += p, i && p !== d) {
                        for (f = 0; h = n[f++];) h(m, v, s, a);
                        if (r) {
                            if (d > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = Y.call(c));
                            v = g(v)
                        }
                        Q.apply(c, v), u && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(c)
                    }
                    return u && (H = w, k = y), m
                };
            return i ? r(s) : s
        }
        var b, w, _, T, x, E, A, C, k, S, D, N, I, O, B, j, P, R, L, $ = "sizzle" + 1 * new Date,
            q = e.document,
            H = 0,
            M = 0,
            U = n(),
            F = n(),
            W = n(),
            z = function (e, t) {
                return e === t && (D = !0), 0
            },
            K = {}.hasOwnProperty,
            V = [],
            Y = V.pop,
            X = V.push,
            Q = V.push,
            G = V.slice,
            J = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            se = new RegExp("^" + ee + "*," + ee + "*"),
            ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ue = new RegExp(re),
            le = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            pe = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            me = /[+~]/,
            ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            we = function (e, t) {
                return t ? "\0" === e ? "เนเธเธ" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            _e = function () {
                N()
            },
            Te = h(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(V = G.call(q.childNodes), q.childNodes), V[q.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: V.length ? function (e, t) {
                    X.apply(e, G.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, x = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : q;
            return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, O = I.documentElement, B = !x(I), q !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = pe.test(I.getElementsByClassName), w.getById = i(function (e) {
                return O.appendChild(e).id = $, !I.getElementsByName || !I.getElementsByName($).length
            }), w.getById ? (_.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, _.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && B) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (_.filter.ID = function (e) {
                var t = e.replace(ve, ye);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, _.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && B) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), _.find.TAG = w.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.CLASS = w.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && B) return t.getElementsByClassName(e)
            }, P = [], j = [], (w.qsa = pe.test(I.querySelectorAll)) && (i(function (e) {
                O.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || j.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = I.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (w.matchesSelector = pe.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), P.push("!=", re)
            }), j = j.length && new RegExp(j.join("|")), P = P.length && new RegExp(P.join("|")), t = pe.test(O.compareDocumentPosition), L = t || pe.test(O.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function (e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === q && L(q, e) ? -1 : t === I || t.ownerDocument === q && L(q, t) ? 1 : S ? J(S, e) - J(S, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return D = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    c = [t];
                if (!i || !o) return e === I ? -1 : t === I ? 1 : i ? -1 : o ? 1 : S ? J(S, e) - J(S, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; a[r] === c[r];) r++;
                return r ? s(a[r], c[r]) : a[r] === q ? -1 : c[r] === q ? 1 : 0
            }, I) : I
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== I && N(e), n = n.replace(ce, "='$1']"), w.matchesSelector && B && !W[n + " "] && (!P || !P.test(n)) && (!j || !j.test(n))) try {
                var r = R.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) { }
            return t(n, I, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== I && N(e), L(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== I && N(e);
            var n = _.attrHandle[t.toLowerCase()],
                r = n && K.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !B) : void 0;
            return void 0 !== r ? r : w.attributes || !B ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(be, we)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (D = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(z), D) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return S = null, e
        }, T = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += T(t);
            return n
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && U(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, c) {
                        var u, l, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !c && !a,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = t; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                for (h = m, f = h[$] || (h[$] = {}), l = f[h.uniqueID] || (f[h.uniqueID] = {}), u = l[e] || [], d = u[0] === H && u[1], b = d && u[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop();)
                                    if (1 === h.nodeType && ++b && h === t) {
                                        l[e] = [H, d, b];
                                        break
                                    }
                            } else if (y && (h = t, f = h[$] || (h[$] = {}), l = f[h.uniqueID] || (f[h.uniqueID] = {}), u = l[e] || [], d = u[0] === H && u[1], b = d), !1 === b)
                                for (;
                                    (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (f = h[$] || (h[$] = {}), l = f[h.uniqueID] || (f[h.uniqueID] = {}), l[e] = [H, b]), h !== t)););
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[$] ? o(n) : o.length > 1 ? (i = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = J(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = A(e.replace(oe, "$1"));
                    return i[$] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(ve, ye),
                        function (t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function (e) {
                    return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = B ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === O
                },
                focus: function (e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !_.pseudos.empty(e)
                },
                header: function (e) {
                    return de.test(e.nodeName)
                },
                input: function (e) {
                    return he.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[b] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in {
            submit: !0,
            reset: !0
        }) _.pseudos[b] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return l.prototype = _.filters = _.pseudos, _.setFilters = new l, E = t.tokenize = function (e, n) {
            var r, i, o, s, a, c, u, l = F[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = e, c = [], u = _.preFilter; a;) {
                r && !(i = se.exec(a)) || (i && (a = a.slice(i[0].length) || a), c.push(o = [])), r = !1, (i = ae.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), a = a.slice(r.length));
                for (s in _.filter) !(i = fe[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : F(e, c).slice(0)
        }, A = t.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = W[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = v(t[n]), o[$] ? r.push(o) : i.push(o);
                o = W(e, y(i, r)), o.selector = e
            }
            return o
        }, C = t.select = function (e, t, n, r) {
            var i, o, s, a, c, l = "function" == typeof e && e,
                h = !r && E(e = l.selector || e);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && B && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !_.relative[a = s.type]);)
                    if ((c = _.find[a]) && (r = c(s.matches[0].replace(ve, ye), me.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                        break
                    }
            }
            return (l || A(e, h))(r, t, !B, n, !t || me.test(e) && u(t.parentNode) || t), n
        }, w.sortStable = $.split("").sort(z).join("") === $, w.detectDuplicates = !!D, N(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ge.find = we, ge.expr = we.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = we.uniqueSort, ge.text = we.getText, ge.isXMLDoc = we.isXML, ge.contains = we.contains, ge.escapeSelector = we.escape;
    var _e = function (e, t, n) {
        for (var r = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && ge(e).is(n)) break;
                r.push(e)
            } return r
    },
        Te = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        xe = ge.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ae = /^.[^:#\[\.,]*$/;
    ge.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ge.find.matchesSelector(r, e) ? [r] : [] : ge.find.matches(e, ge.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ge.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(ge(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (ge.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ge.find(e, i[t], n);
            return r > 1 ? ge.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && xe.test(e) ? ge(e) : e || [], !1).length
        }
    });
    var Ce, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ge.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ce, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ee.test(r[1]) && ge.isPlainObject(t))
                    for (r in t) ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = ne.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
    }).prototype = ge.fn, Ce = ge(ne);
    var Se = /^(?:parents|prev(?:Until|All))/,
        De = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ge.fn.extend({
        has: function (e) {
            var t = ge(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (ge.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && ge(e);
            if (!xe.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ae.call(ge(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ge.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return _e(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return _e(e, "parentNode", n)
        },
        next: function (e) {
            return s(e, "nextSibling")
        },
        prev: function (e) {
            return s(e, "previousSibling")
        },
        nextAll: function (e) {
            return _e(e, "nextSibling")
        },
        prevAll: function (e) {
            return _e(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return _e(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return _e(e, "previousSibling", n)
        },
        siblings: function (e) {
            return Te((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return Te(e.firstChild)
        },
        contents: function (e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), ge.merge([], e.childNodes))
        }
    }, function (e, t) {
        ge.fn[e] = function (n, r) {
            var i = ge.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ge.filter(r, i)), this.length > 1 && (De[e] || ge.uniqueSort(i), Se.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Ne = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function (e) {
        e = "string" == typeof e ? a(e) : ge.extend({}, e);
        var t, n, r, i, o = [],
            s = [],
            c = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; s.length; c = -1)
                    for (n = s.shift(); ++c < o.length;) !1 === o[c].apply(n[0], n[1]) && e.stopOnFalse && (c = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (c = o.length - 1, s.push(n)), function t(n) {
                        ge.each(n, function (n, r) {
                            ge.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== ge.type(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return ge.each(arguments, function (e, t) {
                        for (var n;
                            (n = ge.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function (e) {
                    return e ? ge.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = s = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = s = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    }, ge.extend({
        Deferred: function (t) {
            var n = [
                ["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2],
                ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"],
                ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]
            ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return ge.Deferred(function (t) {
                            ge.each(n, function (n, r) {
                                var i = ge.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var a = this,
                                    l = arguments,
                                    f = function () {
                                        var e, f;
                                        if (!(t < s)) {
                                            if ((e = r.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, ge.isFunction(f) ? i ? f.call(e, o(s, n, c, i), o(s, n, u, i)) : (s++ , f.call(e, o(s, n, c, i), o(s, n, u, i), o(s, n, c, n.notifyWith))) : (r !== c && (a = void 0, l = [e]), (i || n.resolveWith)(a, l))
                                        }
                                    },
                                    h = i ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= s && (r !== u && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? h() : (ge.Deferred.getStackHook && (h.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(h))
                            }
                        }
                        var s = 0;
                        return ge.Deferred(function (e) {
                            n[0][3].add(o(0, e, ge.isFunction(i) ? i : c, e.notifyWith)), n[1][3].add(o(0, e, ge.isFunction(t) ? t : c)), n[2][3].add(o(0, e, ge.isFunction(r) ? r : u))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ge.extend(e, i) : i
                    }
                },
                o = {};
            return ge.each(n, function (e, t) {
                var s = t[2],
                    a = t[5];
                i[t[1]] = s.add, a && s.add(function () {
                    r = a
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = ie.call(arguments),
                o = ge.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (l(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || ge.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) l(i[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Ie = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && Ie.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ge.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var Oe = ge.Deferred();
    ge.fn.ready = function (e) {
        return Oe.then(e).catch(function (e) {
            ge.readyException(e)
        }), this
    }, ge.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || Oe.resolveWith(ne, [ge]))
        }
    }), ge.ready.then = Oe.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Be = function e(t, n, r, i, o, s, a) {
        var c = 0,
            u = t.length,
            l = null == r;
        if ("object" === ge.type(r)) {
            o = !0;
            for (c in r) e(t, n, c, r[c], !0, s, a)
        } else if (void 0 !== i && (o = !0, ge.isFunction(i) || (a = !0), l && (a ? (n.call(t, i), n = null) : (l = n, n = function (e, t, n) {
            return l.call(ge(e), n)
        })), n))
            for (; c < u; c++) n(t[c], r, a ? i : i.call(t[c], c, n(t[c], r)));
        return o ? t : l ? n.call(t) : u ? n(t[0], r) : s
    },
        je = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    h.uid = 1, h.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, je(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[ge.camelCase(t)] = n;
            else
                for (r in t) i[ge.camelCase(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in r ? [t] : t.match(Ne) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                } (void 0 === t || ge.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !ge.isEmptyObject(t)
        }
    };
    var Pe = new h,
        Re = new h,
        Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        $e = /[A-Z]/g;
    ge.extend({
        hasData: function (e) {
            return Re.hasData(e) || Pe.hasData(e)
        },
        data: function (e, t, n) {
            return Re.access(e, t, n)
        },
        removeData: function (e, t) {
            Re.remove(e, t)
        },
        _data: function (e, t, n) {
            return Pe.access(e, t, n)
        },
        _removeData: function (e, t) {
            Pe.remove(e, t)
        }
    }), ge.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Re.get(o), 1 === o.nodeType && !Pe.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ge.camelCase(r.slice(5)), p(o, r, i[r])));
                    Pe.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == (void 0 === e ? "undefined" : _typeof(e)) ? this.each(function () {
                Re.set(this, e)
            }) : Be(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Re.get(o, e))) return n;
                    if (void 0 !== (n = p(o, e))) return n
                } else this.each(function () {
                    Re.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Re.remove(this, e)
            })
        }
    }), ge.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Pe.get(e, t), n && (!r || Array.isArray(n) ? r = Pe.access(e, t, ge.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ge.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ge._queueHooks(e, t),
                s = function () {
                    ge.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Pe.get(e, n) || Pe.access(e, n, {
                empty: ge.Callbacks("once memory").add(function () {
                    Pe.remove(e, [t + "queue", n])
                })
            })
        }
    }), ge.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = ge.queue(this, e, t);
                ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ge.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = ge.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Pe.get(o[s], e + "queueHooks")) && n.empty && (r++ , n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
        Me = ["Top", "Right", "Bottom", "Left"],
        Ue = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
        },
        Fe = function (e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        },
        We = {};
    ge.fn.extend({
        show: function () {
            return v(this, !0)
        },
        hide: function () {
            return v(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Ue(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i,
        Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ve = /^$|\/(?:java|ecma)script/i,
        Ye = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
    var Xe = /<|&#?\w+;/;
    ! function () {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Qe = ne.documentElement,
        Ge = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ze = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, c, u, l, f, h, d, p, g, m = Pe.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && ge.find.matchesSelector(Qe, i), n.guid || (n.guid = ge.guid++), (c = m.events) || (c = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                    return void 0 !== ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(Ne) || [""], u = t.length; u--;) a = Ze.exec(t[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d && (f = ge.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ge.event.special[d] || {}, l = ge.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ge.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, o), (h = c[d]) || (h = c[d] = [], h.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, l) : h.push(l), ge.event.global[d] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, c, u, l, f, h, d, p, g, m = Pe.hasData(e) && Pe.get(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(Ne) || [""], u = t.length; u--;)
                    if (a = Ze.exec(t[u]) || [], d = g = a[1], p = (a[2] || "").split(".").sort(), d) {
                        for (f = ge.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, h = c[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) l = h[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(o, 1), l.selector && h.delegateCount-- , f.remove && f.remove.call(e, l));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || ge.removeEvent(e, d, m.handle), delete c[d])
                    } else
                        for (d in c) ge.event.remove(e, d + t[u], n, r, !0);
                ge.isEmptyObject(c) && Pe.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, s, a = ge.event.fix(e),
                c = new Array(arguments.length),
                u = (Pe.get(this, "events") || {})[a.type] || [],
                l = ge.event.special[a.type] || {};
            for (c[0] = a, t = 1; t < arguments.length; t++) c[t] = arguments[t];
            if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (s = ge.event.handlers.call(this, a, u), t = 0;
                    (i = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (r = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s, a = [],
                c = t.delegateCount,
                u = e.target;
            if (c && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], s = {}, n = 0; n < c; n++) r = t[n], i = r.selector + " ", void 0 === s[i] && (s[i] = r.needsContext ? ge(i, this).index(u) > -1 : ge.find(i, this, null, [u]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    } return u = this, c < t.length && a.push({
                        elem: u,
                        handlers: t.slice(c)
                    }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(ge.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ge.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[ge.expando] ? e : new ge.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== x() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === x() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ge.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ge.Event = function (e, t) {
        return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _ : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void (this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = _, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = _, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ge.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp), ge.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        ge.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || ge.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ge.fn.extend({
        on: function (e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ge(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == (void 0 === e ? "undefined" : _typeof(e))) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function () {
                ge.event.remove(this, e, n, t)
            })
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        tt = /<script|<style|<link/i,
        nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function (e) {
            return e.replace(et, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                c = ge.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                for (s = y(a), o = y(e), r = 0, i = o.length; r < i; r++) D(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || y(e), s = s || y(a), r = 0, i = o.length; r < i; r++) S(o[r], s[r]);
                else S(e, a);
            return s = y(a, "script"), s.length > 0 && b(s, !c && y(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, r, i = ge.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (je(n)) {
                    if (t = n[Pe.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? ge.event.remove(n, r) : ge.removeEvent(n, r, t.handle);
                        n[Pe.expando] = void 0
                    }
                    n[Re.expando] && (n[Re.expando] = void 0)
                }
        }
    }), ge.fn.extend({
        detach: function (e) {
            return I(this, e, !0)
        },
        remove: function (e) {
            return I(this, e)
        },
        text: function (e) {
            return Be(this, function (e) {
                return void 0 === e ? ge.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return N(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    A(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return N(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = A(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return N(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return N(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ge.clone(this, e, t)
            })
        },
        html: function (e) {
            return Be(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !tt.test(e) && !Ye[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) { }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return N(this, arguments, function (t) {
                var n = this.parentNode;
                ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ge.fn[e] = function (e) {
            for (var n, r = [], i = ge(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), ge(i[s])[t](n), se.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ot = /^margin/,
        st = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
        at = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function () {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Qe.removeChild(s), a = null
            }
        }
        var n, r, i, o, s = ne.createElement("div"),
            a = ne.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ge.extend(de, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), r
            },
            pixelMarginRight: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var ct = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        lt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ht = ["Webkit", "Moz", "ms"],
        dt = ne.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = O(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = ge.camelCase(t),
                    c = ut.test(t),
                    u = e.style;
                return c || (t = P(a)), s = ge.cssHooks[t] || ge.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = void 0 === n ? "undefined" : _typeof(n), "string" === o && (i = He.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), void (null != n && n === n && ("number" === o && (n += i && i[3] || (ge.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (c ? u.setProperty(t, n) : u[t] = n))))
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = ge.camelCase(t);
            return ut.test(t) || (t = P(a)), s = ge.cssHooks[t] || ge.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = O(e, t, r)), "normal" === i && t in ft && (i = ft[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), ge.each(["height", "width"], function (e, t) {
        ge.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ct.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $(e, t, r) : Fe(e, lt, function () {
                    return $(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = r && at(e),
                    s = r && L(e, t, r, "border-box" === ge.css(e, "boxSizing", !1, o), o);
                return s && (i = He.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), R(e, n, s)
            }
        }
    }), ge.cssHooks.marginLeft = B(de.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ge.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ge.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Me[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, ot.test(e) || (ge.cssHooks[e + t].set = R)
    }), ge.fn.extend({
        css: function (e, t) {
            return Be(this, function (e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = at(e), i = t.length; s < i; s++) o[t[s]] = ge.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ge.Tween = q, q.prototype = {
        constructor: q,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ge.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ge.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ge.fx = q.prototype.init, ge.fx.step = {};
    var pt, gt, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    ge.Animation = ge.extend(K, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return g(n.elem, e, He.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(t)
        },
        prefilters: [W],
        prefilter: function (e, t) {
            t ? K.prefilters.unshift(e) : K.prefilters.push(e)
        }
    }), ge.speed = function (e, t, n) {
        var r = e && "object" == (void 0 === e ? "undefined" : _typeof(e)) ? ge.extend({}, e) : {
            complete: n || !n && t || ge.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ge.isFunction(t) && t
        };
        return ge.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ge.fx.speeds ? r.duration = ge.fx.speeds[r.duration] : r.duration = ge.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ge.isFunction(r.old) && r.old.call(this), r.queue && ge.dequeue(this, r.queue)
        }, r
    }, ge.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Ue).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = ge.isEmptyObject(e),
                o = ge.speed(t, n, r),
                s = function () {
                    var t = K(this, ge.extend({}, e), o);
                    (i || Pe.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    i = null != e && e + "queueHooks",
                    o = ge.timers,
                    s = Pe.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s) s[i] && s[i].stop && vt.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || ge.dequeue(this, e)
            })
        },
        finish: function (e) {
            return !1 !== e && (e = e || "fx"), this.each(function () {
                var t, n = Pe.get(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ge.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, ge.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ge.each(["toggle", "show", "hide"], function (e, t) {
        var n = ge.fn[t];
        ge.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, r, i)
        }
    }), ge.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        ge.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ge.timers = [], ge.fx.tick = function () {
        var e, t = 0,
            n = ge.timers;
        for (pt = ge.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ge.fx.stop(), pt = void 0
    }, ge.fx.timer = function (e) {
        ge.timers.push(e), ge.fx.start()
    }, ge.fx.interval = 13, ge.fx.start = function () {
        gt || (gt = !0, H())
    }, ge.fx.stop = function () {
        gt = null
    }, ge.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ge.fn.delay = function (t, n) {
        return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    },
        function () {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", de.radioValue = "t" === e.value
        }();
    var yt, bt = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function (e, t) {
            return Be(this, ge.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ge.removeAttr(this, e)
            })
        }
    }), ge.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (i = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ge.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!de.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(Ne);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function (e, t, n) {
            return !1 === t ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = bt[t] || ge.find.attr;
        bt[t] = function (e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = bt[s], bt[s] = i, i = null != n(e, t, r) ? s : null, bt[s] = o), i
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function (e, t) {
            return Be(this, ge.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[ge.propFix[e] || e]
            })
        }
    }), ge.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, i = ge.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), de.optSelected || (ge.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a, c = 0;
            if (ge.isFunction(e)) return this.each(function (t) {
                ge(this).addClass(e.call(this, t, Y(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[c++];)
                    if (i = Y(n), r = 1 === n.nodeType && " " + V(i) + " ") {
                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = V(r), i !== a && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, s, a, c = 0;
            if (ge.isFunction(e)) return this.each(function (t) {
                ge(this).removeClass(e.call(this, t, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[c++];)
                    if (i = Y(n), r = 1 === n.nodeType && " " + V(i) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        a = V(r), i !== a && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = void 0 === e ? "undefined" : _typeof(e);
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function (n) {
                ge(this).toggleClass(e.call(this, n, Y(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = ge(this), o = e.match(Ne) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Y(this), t && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Pe.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + V(Y(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Tt = /\r/g;
    ge.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ge.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ge(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = ge.map(i, function (e) {
                    return null == e ? "" : e + ""
                })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ge.valHooks[i.type] || ge.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Tt, "") : null == n ? "" : n)) : void 0
        }
    }), ge.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : V(ge.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, o = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        c = a ? null : [],
                        u = a ? s + 1 : o.length;
                    for (r = s < 0 ? u : a ? s : 0; r < u; r++)
                        if (n = o[r], (n.selected || r === s) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = ge(n).val(), a) return t;
                            c.push(t)
                        } return c
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = ge.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ge.inArray(ge.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ge.each(["radio", "checkbox"], function () {
        ge.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
            }
        }, de.checkOn || (ge.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function (t, n, r, i) {
            var o, s, a, c, u, l, f, h = [r || ne],
                d = le.call(t, "type") ? t.type : t,
                p = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(d + ge.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, t = t[ge.expando] ? t : new ge.Event(d, "object" == (void 0 === t ? "undefined" : _typeof(t)) && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ge.makeArray(n, [t]), f = ge.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !ge.isWindow(r)) {
                    for (c = f.delegateType || d, xt.test(c + d) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                    a === (r.ownerDocument || ne) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? c : f.bindType || d, l = (Pe.get(s, "events") || {})[t.type] && Pe.get(s, "handle"), l && l.apply(s, n), (l = u && s[u]) && l.apply && je(s) && (t.result = l.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !je(r) || u && ge.isFunction(r[d]) && !ge.isWindow(r) && (a = r[u], a && (r[u] = null), ge.event.triggered = d, r[d](), ge.event.triggered = void 0, a && (r[u] = a)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = ge.extend(new ge.Event, n, {
                type: e,
                isSimulated: !0
            });
            ge.event.trigger(r, null, t)
        }
    }), ge.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                ge.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ge.event.trigger(e, t, n, !0)
        }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        ge.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ge.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), de.focusin = "onfocusin" in e, de.focusin || ge.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            ge.event.simulate(t, e.target, ge.event.fix(e))
        };
        ge.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = Pe.access(r, t);
                i || r.addEventListener(e, n, !0), Pe.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = Pe.access(r, t) - 1;
                i ? Pe.access(r, t, i) : (r.removeEventListener(e, n, !0), Pe.remove(r, t))
            }
        }
    });
    var Et = e.location,
        At = ge.now(),
        Ct = /\?/;
    ge.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), n
    };
    var kt = /\[\]$/,
        St = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    ge.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = ge.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) X(n, e[n], t, i);
        return r.join("&")
    }, ge.fn.extend({
        serialize: function () {
            return ge.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && Nt.test(this.nodeName) && !Dt.test(e) && (this.checked || !ze.test(e))
            }).map(function (e, t) {
                var n = ge(this).val();
                return null == n ? null : Array.isArray(n) ? ge.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(St, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
            }).get()
        }
    });
    var It = /%20/g,
        Ot = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        $t = {},
        qt = {},
        Ht = "*/".concat("*"),
        Mt = ne.createElement("a");
    Mt.href = Et.href, ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: Pt.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ge.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e)
        },
        ajaxPrefilter: Q($t),
        ajaxTransport: Q(qt),
        ajax: function (t, n) {
            function r(t, n, r, a) {
                var u, h, d, w, _, T = n;
                l || (l = !0, c && e.clearTimeout(c), i = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, r && (w = Z(p, x, r)), w = ee(p, w, x, u), u ? (p.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (ge.lastModified[o] = _), (_ = x.getResponseHeader("etag")) && (ge.etag[o] = _)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, h = w.data, d = w.error, u = !d)) : (d = T, !t && T || (T = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || T) + "", u ? v.resolveWith(g, [h, T, x]) : v.rejectWith(g, [x, T, d]), x.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? h : d]), y.fireWith(g, [x, T]), f && (m.trigger("ajaxComplete", [x, p]), --ge.active || ge.event.trigger("ajaxStop")))
            }
            "object" == (void 0 === t ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};
            var i, o, s, a, c, u, l, f, h, d, p = ge.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
                v = ge.Deferred(),
                y = ge.Callbacks("once memory"),
                b = p.statusCode || {},
                w = {},
                _ = {},
                T = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = jt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return l ? s : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == l && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == l && (p.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (l) x.always(e[x.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || Et.href) + "").replace(Lt, Et.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ne) || [""], null == p.crossDomain) {
                u = ne.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Mt.protocol + "//" + Mt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ge.param(p.data, p.traditional)), G($t, p, n, x), l) return x;
            f = ge.event && p.global, f && 0 == ge.active++ && ge.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Rt.test(p.type), o = p.url.replace(Ot, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (d = p.url.slice(o.length), p.data && (o += (Ct.test(o) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (o = o.replace(Bt, "$1"), d = (Ct.test(o) ? "&" : "?") + "_=" + At++ + d), p.url = o + d), p.ifModified && (ge.lastModified[o] && x.setRequestHeader("If-Modified-Since", ge.lastModified[o]), ge.etag[o] && x.setRequestHeader("If-None-Match", ge.etag[o])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) x.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || l)) return x.abort();
            if (T = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), i = G(qt, p, n, x)) {
                if (x.readyState = 1, f && m.trigger("ajaxSend", [x, p]), l) return x;
                p.async && p.timeout > 0 && (c = e.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    l = !1, i.send(w, r)
                } catch (e) {
                    if (l) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, n) {
            return ge.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ge.get(e, void 0, t, "script")
        }
    }), ge.each(["get", "post"], function (e, t) {
        ge[t] = function (e, n, r, i) {
            return ge.isFunction(n) && (i = i || r, r = n, n = void 0), ge.ajax(ge.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, ge.isPlainObject(e) && e))
        }
    }), ge._evalUrl = function (e) {
        return ge.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, ge.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return ge.isFunction(e) ? this.each(function (t) {
                ge(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ge(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ge.isFunction(e);
            return this.each(function (n) {
                ge(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                ge(this).replaceWith(this.childNodes)
            }), this
        }
    }), ge.expr.pseudos.hidden = function (e) {
        return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) { }
    };
    var Ut = {
        0: 200,
        1223: 204
    },
        Ft = ge.ajaxSettings.xhr();
    de.cors = !!Ft && "withCredentials" in Ft, de.ajax = Ft = !!Ft, ge.ajaxTransport(function (t) {
        var n, r;
        if (de.cors || Ft && !t.crossDomain) return {
            send: function (i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function (e) {
                    return function () {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), ge.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return ge.globalEval(e), e
            }
        }
    }), ge.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = ge("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Wt = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Wt.pop() || ge.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), ge.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(zt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || ge.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            void 0 === o ? ge(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Wt.push(i)), s && ge.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), de.createHTMLDocument = function () {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (de.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ne.location.href, t.head.appendChild(r)) : t = ne), i = Ee.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = w([e], t, o), o && o.length && ge(o).remove(), ge.merge([], i.childNodes))
    }, ge.fn.load = function (e, t, n) {
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = V(e.slice(a)), e = e.slice(0, a)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == (void 0 === t ? "undefined" : _typeof(t)) && (i = "POST"), s.length > 0 && ge.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? ge("<div>").append(ge.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ge.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ge.expr.pseudos.animated = function (e) {
        return ge.grep(ge.timers, function (t) {
            return e === t.elem
        }).length
    }, ge.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, c, u, l = ge.css(e, "position"),
                f = ge(e),
                h = {};
            "static" === l && (e.style.position = "relative"), a = f.offset(), o = ge.css(e, "top"), c = ge.css(e, "left"), u = ("absolute" === l || "fixed" === l) && (o + c).indexOf("auto") > -1, u ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(c) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + i), "using" in t ? t.using.call(e, h) : f.css(h)
        }
    }, ge.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                ge.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                    top: 0,
                    left: 0
                } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + ge.css(e[0], "borderTopWidth", !0),
                    left: r.left + ge.css(e[0], "borderLeftWidth", !0)
                }), {
                        top: t.top - r.top - ge.css(n, "marginTop", !0),
                        left: t.left - r.left - ge.css(n, "marginLeft", !0)
                    }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
                return e || Qe
            })
        }
    }), ge.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        ge.fn[e] = function (r) {
            return Be(this, function (e, r, i) {
                var o;
                return ge.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }), ge.each(["top", "left"], function (e, t) {
        ge.cssHooks[t] = B(de.pixelPosition, function (e, n) {
            if (n) return n = O(e, t), st.test(n) ? ge(e).position()[t] + "px" : n
        })
    }), ge.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        ge.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            ge.fn[r] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                return Be(this, function (t, n, i) {
                    var o;
                    return ge.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ge.css(t, n, a) : ge.style(t, n, i, a)
                }, t, s ? i : void 0, s)
            }
        })
    }), ge.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ge.holdReady = function (e) {
        e ? ge.readyWait++ : ge.ready(!0)
    }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ge
    });
    var Kt = e.jQuery,
        Vt = e.$;
    return ge.noConflict = function (t) {
        return e.$ === ge && (e.$ = Vt), t && e.jQuery === ge && (e.jQuery = Kt), ge
    }, t || (e.jQuery = e.$ = ge), ge
}),
    function (e, t) {
        "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
    }(this, function () {
        "use strict";

        function e(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function t(e, t) {
            if (1 !== e.nodeType) return [];
            var n = window.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function n(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function r(e) {
            if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
            var i = t(e),
                o = i.overflow,
                s = i.overflowX;
            return /(auto|scroll)/.test(o + i.overflowY + s) ? e : r(n(e))
        }

        function i(e) {
            var n = e && e.offsetParent,
                r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? i(n) : n : window.document.documentElement
        }

        function o(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || i(e.firstElementChild) === e)
        }

        function s(e) {
            return null === e.parentNode ? e : s(e.parentNode)
        }

        function a(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                r = n ? e : t,
                c = n ? t : e,
                u = document.createRange();
            u.setStart(r, 0), u.setEnd(c, 0);
            var l = u.commonAncestorContainer;
            if (e !== l && t !== l || r.contains(c)) return o(l) ? l : i(l);
            var f = s(e);
            return f.host ? a(f.host, t) : a(e, s(t).host)
        }

        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === t ? "scrollTop" : "scrollLeft",
                r = e.nodeName;
            if ("BODY" === r || "HTML" === r) {
                var i = window.document.documentElement;
                return (window.document.scrollingElement || i)[n]
            }
            return e[n]
        }

        function u(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                r = c(t, "top"),
                i = c(t, "left"),
                o = n ? -1 : 1;
            return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
        }

        function l(e, t) {
            var n = "x" === t ? "Left" : "Top",
                r = "Left" == n ? "Right" : "Bottom";
            return +e["border" + n + "Width"].split("px")[0] + +e["border" + r + "Width"].split("px")[0]
        }

        function f(e, t, n, r) {
            return Y(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], re() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }

        function h() {
            var e = window.document.body,
                t = window.document.documentElement,
                n = re() && window.getComputedStyle(t);
            return {
                height: f("Height", e, t, n),
                width: f("Width", e, t, n)
            }
        }

        function d(e) {
            return ae({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }

        function p(e) {
            var n = {};
            if (re()) try {
                n = e.getBoundingClientRect();
                var r = c(e, "top"),
                    i = c(e, "left");
                n.top += r, n.left += i, n.bottom += r, n.right += i
            } catch (e) { } else n = e.getBoundingClientRect();
            var o = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
                s = "HTML" === e.nodeName ? h() : {},
                a = s.width || e.clientWidth || o.right - o.left,
                u = s.height || e.clientHeight || o.bottom - o.top,
                f = e.offsetWidth - a,
                p = e.offsetHeight - u;
            if (f || p) {
                var g = t(e);
                f -= l(g, "x"), p -= l(g, "y"), o.width -= f, o.height -= p
            }
            return d(o)
        }

        function g(e, n) {
            var i = re(),
                o = "HTML" === n.nodeName,
                s = p(e),
                a = p(n),
                c = r(e),
                l = t(n),
                f = +l.borderTopWidth.split("px")[0],
                h = +l.borderLeftWidth.split("px")[0],
                g = d({
                    top: s.top - a.top - f,
                    left: s.left - a.left - h,
                    width: s.width,
                    height: s.height
                });
            if (g.marginTop = 0, g.marginLeft = 0, !i && o) {
                var m = +l.marginTop.split("px")[0],
                    v = +l.marginLeft.split("px")[0];
                g.top -= f - m, g.bottom -= f - m, g.left -= h - v, g.right -= h - v, g.marginTop = m, g.marginLeft = v
            }
            return (i ? n.contains(c) : n === c && "BODY" !== c.nodeName) && (g = u(g, n)), g
        }

        function m(e) {
            var t = window.document.documentElement,
                n = g(e, t),
                r = Y(t.clientWidth, window.innerWidth || 0),
                i = Y(t.clientHeight, window.innerHeight || 0),
                o = c(t),
                s = c(t, "left");
            return d({
                top: o - n.top + n.marginTop,
                left: s - n.left + n.marginLeft,
                width: r,
                height: i
            })
        }

        function v(e) {
            var r = e.nodeName;
            return "BODY" !== r && "HTML" !== r && ("fixed" === t(e, "position") || v(n(e)))
        }

        function y(e, t, i, o) {
            var s = {
                top: 0,
                left: 0
            },
                c = a(e, t);
            if ("viewport" === o) s = m(c);
            else {
                var u;
                "scrollParent" === o ? (u = r(n(e)), "BODY" === u.nodeName && (u = window.document.documentElement)) : u = "window" === o ? window.document.documentElement : o;
                var l = g(u, c);
                if ("HTML" !== u.nodeName || v(c)) s = l;
                else {
                    var f = h(),
                        d = f.height,
                        p = f.width;
                    s.top += l.top - l.marginTop, s.bottom = d + l.top, s.left += l.left - l.marginLeft, s.right = p + l.left
                }
            }
            return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
        }

        function b(e) {
            return e.width * e.height
        }

        function w(e, t, n, r, i) {
            var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var s = y(n, r, o, i),
                a = {
                    top: {
                        width: s.width,
                        height: t.top - s.top
                    },
                    right: {
                        width: s.right - t.right,
                        height: s.height
                    },
                    bottom: {
                        width: s.width,
                        height: s.bottom - t.bottom
                    },
                    left: {
                        width: t.left - s.left,
                        height: s.height
                    }
                },
                c = Object.keys(a).map(function (e) {
                    return ae({
                        key: e
                    }, a[e], {
                        area: b(a[e])
                    })
                }).sort(function (e, t) {
                    return t.area - e.area
                }),
                u = c.filter(function (e) {
                    var t = e.width,
                        r = e.height;
                    return t >= n.clientWidth && r >= n.clientHeight
                }),
                l = 0 < u.length ? u[0].key : c[0].key,
                f = e.split("-")[1];
            return l + (f ? "-" + f : "")
        }

        function _(e, t, n) {
            return g(n, a(t, n))
        }

        function T(e) {
            var t = window.getComputedStyle(e),
                n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {
                width: e.offsetWidth + r,
                height: e.offsetHeight + n
            }
        }

        function x(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }

        function E(e, t, n) {
            n = n.split("-")[0];
            var r = T(e),
                i = {
                    width: r.width,
                    height: r.height
                },
                o = -1 !== ["right", "left"].indexOf(n),
                s = o ? "top" : "left",
                a = o ? "left" : "top",
                c = o ? "height" : "width",
                u = o ? "width" : "height";
            return i[s] = t[s] + t[c] / 2 - r[c] / 2, i[a] = n === a ? t[a] - r[u] : t[x(a)], i
        }

        function A(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function C(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var r = A(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(r)
        }

        function k(t, n, r) {
            return (void 0 === r ? t : t.slice(0, C(t, "name", r))).forEach(function (t) {
                t.function;
                var r = t.function || t.fn;
                t.enabled && e(r) && (n.offsets.popper = d(n.offsets.popper), n.offsets.reference = d(n.offsets.reference), n = r(n, t))
            }), n
        }

        function S() {
            if (!this.state.isDestroyed) {
                var e = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                e.offsets.reference = _(this.state, this.popper, this.reference), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = E(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = k(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function D(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function N(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
                var i = t[r],
                    o = i ? "" + i + n : e;
                if (void 0 !== window.document.body.style[o]) return o
            }
            return null
        }

        function I() {
            return this.state.isDestroyed = !0, D(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function O(e, t, n, i) {
            var o = "BODY" === e.nodeName,
                s = o ? window : e;
            s.addEventListener(t, n, {
                passive: !0
            }), o || O(r(s.parentNode), t, n, i), i.push(s)
        }

        function B(e, t, n, i) {
            n.updateBound = i, window.addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = r(e);
            return O(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function j() {
            this.state.eventsEnabled || (this.state = B(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function P(e, t) {
            return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }

        function R() {
            this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = P(this.reference, this.state))
        }

        function L(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function $(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && L(t[n]) && (r = "px"), e.style[n] = t[n] + r
            })
        }

        function q(e, t) {
            Object.keys(t).forEach(function (n) {
                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
            })
        }

        function H(e, t, n) {
            var r = A(e, function (e) {
                return e.name === t
            }),
                i = !!r && e.some(function (e) {
                    return e.name === n && e.enabled && e.order < r.order
                });
            if (!i);
            return i
        }

        function M(e) {
            return "end" === e ? "start" : "start" === e ? "end" : e
        }

        function U(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = ue.indexOf(e),
                r = ue.slice(n + 1).concat(ue.slice(0, n));
            return t ? r.reverse() : r
        }

        function F(e, t, n, r) {
            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                o = +i[1],
                s = i[2];
            if (!o) return e;
            if (0 === s.indexOf("%")) {
                var a;
                switch (s) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = r
                }
                return d(a)[t] / 100 * o
            }
            if ("vh" === s || "vw" === s) {
                return ("vh" === s ? Y(document.documentElement.clientHeight, window.innerHeight || 0) : Y(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
            }
            return o
        }

        function W(e, t, n, r) {
            var i = [0, 0],
                o = -1 !== ["right", "left"].indexOf(r),
                s = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim()
                }),
                a = s.indexOf(A(s, function (e) {
                    return -1 !== e.search(/,|\s/)
                }));
            s[a] && s[a].indexOf(",");
            var c = /\s*,\s*|\s+/,
                u = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(c)[0]]), [s[a].split(c)[1]].concat(s.slice(a + 1))];
            return u = u.map(function (e, r) {
                var i = (1 === r ? !o : o) ? "height" : "width",
                    s = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                }, []).map(function (e) {
                    return F(e, i, t, n)
                })
            }), u.forEach(function (e, t) {
                e.forEach(function (n, r) {
                    L(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                })
            }), i
        }

        function z(e, t) {
            var n, r = t.offset,
                i = e.placement,
                o = e.offsets,
                s = o.popper,
                a = o.reference,
                c = i.split("-")[0];
            return n = L(+r) ? [+r, 0] : W(r, s, a, c), "left" === c ? (s.top += n[0], s.left -= n[1]) : "right" === c ? (s.top += n[0], s.left += n[1]) : "top" === c ? (s.left += n[0], s.top -= n[1]) : "bottom" === c && (s.left += n[0], s.top += n[1]), e.popper = s, e
        }
        for (var K = Math.min, V = Math.floor, Y = Math.max, X = ["native code", "[object MutationObserverConstructor]"], Q = "undefined" != typeof window, G = ["Edge", "Trident", "Firefox"], J = 0, Z = 0; Z < G.length; Z += 1)
            if (Q && 0 <= navigator.userAgent.indexOf(G[Z])) {
                J = 1;
                break
            } var ee, te = Q && function (e) {
                return X.some(function (t) {
                    return -1 < (e || "").toString().indexOf(t)
                })
            }(window.MutationObserver),
                ne = te ? function (e) {
                    var t = !1,
                        n = 0,
                        r = document.createElement("span");
                    return new MutationObserver(function () {
                        e(), t = !1
                    }).observe(r, {
                        attributes: !0
                    }),
                        function () {
                            t || (t = !0, r.setAttribute("x-index", n), ++n)
                        }
                } : function (e) {
                    var t = !1;
                    return function () {
                        t || (t = !0, setTimeout(function () {
                            t = !1, e()
                        }, J))
                    }
                },
                re = function () {
                    return void 0 == ee && (ee = -1 !== navigator.appVersion.indexOf("MSIE 10")), ee
                },
                ie = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                oe = function () {
                    function e(e, t) {
                        for (var n, r = 0; r < t.length; r++) n = t[r], n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                se = function (e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                ae = Object.assign || function (e) {
                    for (var t, n = 1; n < arguments.length; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                },
                ce = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                ue = ce.slice(3),
                le = {
                    FLIP: "flip",
                    CLOCKWISE: "clockwise",
                    COUNTERCLOCKWISE: "counterclockwise"
                },
                fe = function () {
                    function t(n, r) {
                        var i = this,
                            o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                        ie(this, t), this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update)
                        }, this.update = ne(this.update.bind(this)), this.options = ae({}, t.Defaults, o), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = n.jquery ? n[0] : n, this.popper = r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(ae({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                            i.options.modifiers[e] = ae({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                        }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                            return ae({
                                name: e
                            }, i.options.modifiers[e])
                        }).sort(function (e, t) {
                            return e.order - t.order
                        }), this.modifiers.forEach(function (t) {
                            t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                        }), this.update();
                        var s = this.options.eventsEnabled;
                        s && this.enableEventListeners(), this.state.eventsEnabled = s
                    }
                    return oe(t, [{
                        key: "update",
                        value: function () {
                            return S.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            return I.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function () {
                            return j.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function () {
                            return R.call(this)
                        }
                    }]), t
                }();
        return fe.Utils = ("undefined" == typeof window ? global : window).PopperUtils, fe.placements = ce, fe.Defaults = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () { },
            onUpdate: function () { },
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            r = t.split("-")[1];
                        if (r) {
                            var i = e.offsets,
                                o = i.reference,
                                s = i.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                c = a ? "left" : "top",
                                u = a ? "width" : "height",
                                l = {
                                    start: se({}, c, o[c]),
                                    end: se({}, c, o[c] + o[u] - s[u])
                                };
                            e.offsets.popper = ae({}, s, l[r])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: z,
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.boundariesElement || i(e.instance.popper);
                        e.instance.reference === n && (n = i(n));
                        var r = y(e.instance.popper, e.instance.reference, t.padding, n);
                        t.boundaries = r;
                        var o = t.priority,
                            s = e.offsets.popper,
                            a = {
                                primary: function (e) {
                                    var n = s[e];
                                    return s[e] < r[e] && !t.escapeWithReference && (n = Y(s[e], r[e])), se({}, e, n)
                                },
                                secondary: function (e) {
                                    var n = "right" === e ? "left" : "top",
                                        i = s[n];
                                    return s[e] > r[e] && !t.escapeWithReference && (i = K(s[n], r[e] - ("right" === e ? s.width : s.height))), se({}, n, i)
                                }
                            };
                        return o.forEach(function (e) {
                            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                            s = ae({}, s, a[t](e))
                        }), e.offsets.popper = s, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            r = t.reference,
                            i = e.placement.split("-")[0],
                            o = V,
                            s = -1 !== ["top", "bottom"].indexOf(i),
                            a = s ? "right" : "bottom",
                            c = s ? "left" : "top",
                            u = s ? "width" : "height";
                        return n[a] < o(r[c]) && (e.offsets.popper[c] = o(r[c]) - n[u]), n[c] > o(r[a]) && (e.offsets.popper[c] = o(r[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, n) {
                        if (!H(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = n.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return e;
                        var i = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            c = -1 !== ["left", "right"].indexOf(i),
                            u = c ? "height" : "width",
                            l = c ? "Top" : "Left",
                            f = l.toLowerCase(),
                            h = c ? "left" : "top",
                            p = c ? "bottom" : "right",
                            g = T(r)[u];
                        a[p] - g < s[f] && (e.offsets.popper[f] -= s[f] - (a[p] - g)), a[f] + g > s[p] && (e.offsets.popper[f] += a[f] + g - s[p]);
                        var m = a[f] + a[u] / 2 - g / 2,
                            v = t(e.instance.popper, "margin" + l).replace("px", ""),
                            y = m - d(e.offsets.popper)[f] - v;
                        return y = Y(K(s[u] - g, y), 0), e.arrowElement = r, e.offsets.arrow = {}, e.offsets.arrow[f] = Math.round(y), e.offsets.arrow[h] = "", e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (D(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                            r = e.placement.split("-")[0],
                            i = x(r),
                            o = e.placement.split("-")[1] || "",
                            s = [];
                        switch (t.behavior) {
                            case le.FLIP:
                                s = [r, i];
                                break;
                            case le.CLOCKWISE:
                                s = U(r);
                                break;
                            case le.COUNTERCLOCKWISE:
                                s = U(r, !0);
                                break;
                            default:
                                s = t.behavior
                        }
                        return s.forEach(function (a, c) {
                            if (r !== a || s.length === c + 1) return e;
                            r = e.placement.split("-")[0], i = x(r);
                            var u = e.offsets.popper,
                                l = e.offsets.reference,
                                f = V,
                                h = "left" === r && f(u.right) > f(l.left) || "right" === r && f(u.left) < f(l.right) || "top" === r && f(u.bottom) > f(l.top) || "bottom" === r && f(u.top) < f(l.bottom),
                                d = f(u.left) < f(n.left),
                                p = f(u.right) > f(n.right),
                                g = f(u.top) < f(n.top),
                                m = f(u.bottom) > f(n.bottom),
                                v = "left" === r && d || "right" === r && p || "top" === r && g || "bottom" === r && m,
                                y = -1 !== ["top", "bottom"].indexOf(r),
                                b = !!t.flipVariations && (y && "start" === o && d || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m);
                            (h || v || b) && (e.flipped = !0, (h || v) && (r = s[c + 1]), b && (o = M(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = ae({}, e.offsets.popper, E(e.instance.popper, e.offsets.reference, e.placement)), e = k(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            r = e.offsets,
                            i = r.popper,
                            o = r.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0), e.placement = x(t), e.offsets.popper = d(i), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!H(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = A(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n, r, o = t.x,
                            s = t.y,
                            a = e.offsets.popper,
                            c = A(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration,
                            u = void 0 === c ? t.gpuAcceleration : c,
                            l = i(e.instance.popper),
                            f = p(l),
                            h = {
                                position: a.position
                            },
                            d = {
                                left: V(a.left),
                                top: V(a.top),
                                bottom: V(a.bottom),
                                right: V(a.right)
                            },
                            g = "bottom" === o ? "top" : "bottom",
                            m = "right" === s ? "left" : "right",
                            v = N("transform");
                        if (r = "bottom" == g ? -f.height + d.bottom : d.top, n = "right" == m ? -f.width + d.right : d.left, u && v) h[v] = "translate3d(" + n + "px, " + r + "px, 0)", h[g] = 0, h[m] = 0, h.willChange = "transform";
                        else {
                            var y = "bottom" == g ? -1 : 1,
                                b = "right" == m ? -1 : 1;
                            h[g] = r * y, h[m] = n * b, h.willChange = g + ", " + m
                        }
                        var w = {
                            "x-placement": e.placement
                        };
                        return e.attributes = ae({}, w, e.attributes), e.styles = ae({}, h, e.styles), e.arrowStyles = ae({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return $(e.instance.popper, e.styles), q(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && $(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function (e, t, n, r, i) {
                        var o = _(i, t, e),
                            s = w(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), $(t, {
                            position: "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        }, fe
    }),
    function (e, t) {
        "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
    }(this, function (e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function o() {
            return (o = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }
        t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var s, a, c, u, l, f, h, d, p, g, m, v, y, b, w, _, T, x, E, A, C, k, S, D, N, I, O = function (e) {
            function t(t) {
                var n = this,
                    i = !1;
                return e(this).one(r.TRANSITION_END, function () {
                    i = !0
                }), setTimeout(function () {
                    i || r.triggerTransitionEnd(n)
                }, t), this
            }
            var n = !1,
                r = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (e) {
                        do {
                            e += ~~(1e6 * Math.random())
                        } while (document.getElementById(e));
                        return e
                    },
                    getSelectorFromElement: function (t) {
                        var n, r = t.getAttribute("data-target");
                        r && "#" !== r || (r = t.getAttribute("href") || ""), "#" === r.charAt(0) && (n = r, r = n = "function" == typeof e.escapeSelector ? e.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                        try {
                            return e(document).find(r).length > 0 ? r : null
                        } catch (e) {
                            return null
                        }
                    },
                    reflow: function (e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function (t) {
                        e(t).trigger(n.end)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(n)
                    },
                    isElement: function (e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function (e, t, n) {
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i)) {
                                var o = n[i],
                                    s = t[i],
                                    a = s && r.isElement(s) ? "element" : (c = s, {}.toString.call(c).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                                if (!new RegExp(o).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + o + '".')
                            } var c
                    }
                };
            return n = ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }, e.fn.emulateTransitionEnd = t, r.supportsTransitionEnd() && (e.event.special[r.TRANSITION_END] = {
                bindType: n.end,
                delegateType: n.end,
                handle: function (t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }), r
        }(t),
            B = (a = "alert", u = "." + (c = "bs.alert"), l = (s = t).fn[a], f = {
                CLOSE: "close" + u,
                CLOSED: "closed" + u,
                CLICK_DATA_API: "click" + u + ".data-api"
            }, h = "alert", d = "fade", p = "show", g = function () {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.close = function (e) {
                    e = e || this._element;
                    var t = this._getRootElement(e);
                    this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, t.dispose = function () {
                    s.removeData(this._element, c), this._element = null
                }, t._getRootElement = function (e) {
                    var t = O.getSelectorFromElement(e),
                        n = !1;
                    return t && (n = s(t)[0]), n || (n = s(e).closest("." + h)[0]), n
                }, t._triggerCloseEvent = function (e) {
                    var t = s.Event(f.CLOSE);
                    return s(e).trigger(t), t
                }, t._removeElement = function (e) {
                    var t = this;
                    s(e).removeClass(p), O.supportsTransitionEnd() && s(e).hasClass(d) ? s(e).one(O.TRANSITION_END, function (n) {
                        return t._destroyElement(e, n)
                    }).emulateTransitionEnd(150) : this._destroyElement(e)
                }, t._destroyElement = function (e) {
                    s(e).detach().trigger(f.CLOSED).remove()
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = s(this),
                            r = n.data(c);
                        r || (r = new e(this), n.data(c, r)), "close" === t && r[t](this)
                    })
                }, e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, i(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.0.0"
                    }
                }]), e
            }(), s(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), s.fn[a] = g._jQueryInterface, s.fn[a].Constructor = g, s.fn[a].noConflict = function () {
                return s.fn[a] = l, g._jQueryInterface
            }, g),
            j = (v = "button", b = "." + (y = "bs.button"), w = ".data-api", _ = (m = t).fn[v], T = "active", x = "btn", E = "focus", A = '[data-toggle^="button"]', C = '[data-toggle="buttons"]', k = "input", S = ".active", D = ".btn", N = {
                CLICK_DATA_API: "click" + b + w,
                FOCUS_BLUR_DATA_API: "focus" + b + w + " blur" + b + w
            }, I = function () {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.toggle = function () {
                    var e = !0,
                        t = !0,
                        n = m(this._element).closest(C)[0];
                    if (n) {
                        var r = m(this._element).find(k)[0];
                        if (r) {
                            if ("radio" === r.type)
                                if (r.checked && m(this._element).hasClass(T)) e = !1;
                                else {
                                    var i = m(n).find(S)[0];
                                    i && m(i).removeClass(T)
                                } if (e) {
                                    if (r.hasAttribute("disabled") || n.hasAttribute("disabled") || r.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                    r.checked = !m(this._element).hasClass(T), m(r).trigger("change")
                                }
                            r.focus(), t = !1
                        }
                    }
                    t && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(T)), e && m(this._element).toggleClass(T)
                }, t.dispose = function () {
                    m.removeData(this._element, y), this._element = null
                }, e._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = m(this).data(y);
                        n || (n = new e(this), m(this).data(y, n)), "toggle" === t && n[t]()
                    })
                }, i(e, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.0.0"
                    }
                }]), e
            }(), m(document).on(N.CLICK_DATA_API, A, function (e) {
                e.preventDefault();
                var t = e.target;
                m(t).hasClass(x) || (t = m(t).closest(D)), I._jQueryInterface.call(m(t), "toggle")
            }).on(N.FOCUS_BLUR_DATA_API, A, function (e) {
                var t = m(e.target).closest(D)[0];
                m(t).toggleClass(E, /^focus(in)?$/.test(e.type))
            }), m.fn[v] = I._jQueryInterface, m.fn[v].Constructor = I, m.fn[v].noConflict = function () {
                return m.fn[v] = _, I._jQueryInterface
            }, I),
            P = function (e) {
                var t = "carousel",
                    n = "bs.carousel",
                    r = "." + n,
                    s = e.fn[t],
                    a = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    c = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    u = "next",
                    l = "prev",
                    f = {
                        SLIDE: "slide" + r,
                        SLID: "slid" + r,
                        KEYDOWN: "keydown" + r,
                        MOUSEENTER: "mouseenter" + r,
                        MOUSELEAVE: "mouseleave" + r,
                        TOUCHEND: "touchend" + r,
                        LOAD_DATA_API: "load" + r + ".data-api",
                        CLICK_DATA_API: "click" + r + ".data-api"
                    },
                    h = "active",
                    d = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    p = function () {
                        function s(t, n) {
                            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(d.INDICATORS)[0], this._addEventListeners()
                        }
                        var p = s.prototype;
                        return p.next = function () {
                            this._isSliding || this._slide(u)
                        }, p.nextWhenVisible = function () {
                            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                        }, p.prev = function () {
                            this._isSliding || this._slide(l)
                        }, p.pause = function (t) {
                            t || (this._isPaused = !0), e(this._element).find(d.NEXT_PREV)[0] && O.supportsTransitionEnd() && (O.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                        }, p.cycle = function (e) {
                            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                        }, p.to = function (t) {
                            var n = this;
                            this._activeElement = e(this._element).find(d.ACTIVE_ITEM)[0];
                            var r = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || t < 0))
                                if (this._isSliding) e(this._element).one(f.SLID, function () {
                                    return n.to(t)
                                });
                                else {
                                    if (r === t) return this.pause(), void this.cycle();
                                    var i = t > r ? u : l;
                                    this._slide(i, this._items[t])
                                }
                        }, p.dispose = function () {
                            e(this._element).off(r), e.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                        }, p._getConfig = function (e) {
                            return e = o({}, a, e), O.typeCheckConfig(t, e, c), e
                        }, p._addEventListeners = function () {
                            var t = this;
                            this._config.keyboard && e(this._element).on(f.KEYDOWN, function (e) {
                                return t._keydown(e)
                            }), "hover" === this._config.pause && (e(this._element).on(f.MOUSEENTER, function (e) {
                                return t.pause(e)
                            }).on(f.MOUSELEAVE, function (e) {
                                return t.cycle(e)
                            }), "ontouchstart" in document.documentElement && e(this._element).on(f.TOUCHEND, function () {
                                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                    return t.cycle(e)
                                }, 500 + t._config.interval)
                            }))
                        }, p._keydown = function (e) {
                            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next()
                            }
                        }, p._getItemIndex = function (t) {
                            return this._items = e.makeArray(e(t).parent().find(d.ITEM)), this._items.indexOf(t)
                        }, p._getItemByDirection = function (e, t) {
                            var n = e === u,
                                r = e === l,
                                i = this._getItemIndex(t),
                                o = this._items.length - 1;
                            if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                            var s = (i + (e === l ? -1 : 1)) % this._items.length;
                            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                        }, p._triggerSlideEvent = function (t, n) {
                            var r = this._getItemIndex(t),
                                i = this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),
                                o = e.Event(f.SLIDE, {
                                    relatedTarget: t,
                                    direction: n,
                                    from: i,
                                    to: r
                                });
                            return e(this._element).trigger(o), o
                        }, p._setActiveIndicatorElement = function (t) {
                            if (this._indicatorsElement) {
                                e(this._indicatorsElement).find(d.ACTIVE).removeClass(h);
                                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                                n && e(n).addClass(h)
                            }
                        }, p._slide = function (t, n) {
                            var r, i, o, s = this,
                                a = e(this._element).find(d.ACTIVE_ITEM)[0],
                                c = this._getItemIndex(a),
                                l = n || a && this._getItemByDirection(t, a),
                                p = this._getItemIndex(l),
                                g = Boolean(this._interval);
                            if (t === u ? (r = "carousel-item-left", i = "carousel-item-next", o = "left") : (r = "carousel-item-right", i = "carousel-item-prev", o = "right"), l && e(l).hasClass(h)) this._isSliding = !1;
                            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && a && l) {
                                this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(l);
                                var m = e.Event(f.SLID, {
                                    relatedTarget: l,
                                    direction: o,
                                    from: c,
                                    to: p
                                });
                                O.supportsTransitionEnd() && e(this._element).hasClass("slide") ? (e(l).addClass(i), O.reflow(l), e(a).addClass(r), e(l).addClass(r), e(a).one(O.TRANSITION_END, function () {
                                    e(l).removeClass(r + " " + i).addClass(h), e(a).removeClass(h + " " + i + " " + r), s._isSliding = !1, setTimeout(function () {
                                        return e(s._element).trigger(m)
                                    }, 0)
                                }).emulateTransitionEnd(600)) : (e(a).removeClass(h), e(l).addClass(h), this._isSliding = !1, e(this._element).trigger(m)), g && this.cycle()
                            }
                        }, s._jQueryInterface = function (t) {
                            return this.each(function () {
                                var r = e(this).data(n),
                                    i = o({}, a, e(this).data());
                                "object" == (void 0 === t ? "undefined" : _typeof(t)) && (i = o({}, i, t));
                                var c = "string" == typeof t ? t : i.slide;
                                if (r || (r = new s(this, i), e(this).data(n, r)), "number" == typeof t) r.to(t);
                                else if ("string" == typeof c) {
                                    if (void 0 === r[c]) throw new TypeError('No method named "' + c + '"');
                                    r[c]()
                                } else i.interval && (r.pause(), r.cycle())
                            })
                        }, s._dataApiClickHandler = function (t) {
                            var r = O.getSelectorFromElement(this);
                            if (r) {
                                var i = e(r)[0];
                                if (i && e(i).hasClass("carousel")) {
                                    var a = o({}, e(i).data(), e(this).data()),
                                        c = this.getAttribute("data-slide-to");
                                    c && (a.interval = !1), s._jQueryInterface.call(e(i), a), c && e(i).data(n).to(c), t.preventDefault()
                                }
                            }
                        }, i(s, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }]), s
                    }();
                return e(document).on(f.CLICK_DATA_API, d.DATA_SLIDE, p._dataApiClickHandler), e(window).on(f.LOAD_DATA_API, function () {
                    e(d.DATA_RIDE).each(function () {
                        var t = e(this);
                        p._jQueryInterface.call(t, t.data())
                    })
                }), e.fn[t] = p._jQueryInterface, e.fn[t].Constructor = p, e.fn[t].noConflict = function () {
                    return e.fn[t] = s, p._jQueryInterface
                }, p
            }(t),
            R = function (e) {
                var t = "collapse",
                    n = "bs.collapse",
                    r = "." + n,
                    s = e.fn[t],
                    a = {
                        toggle: !0,
                        parent: ""
                    },
                    c = {
                        toggle: "boolean",
                        parent: "(string|element)"
                    },
                    u = {
                        SHOW: "show" + r,
                        SHOWN: "shown" + r,
                        HIDE: "hide" + r,
                        HIDDEN: "hidden" + r,
                        CLICK_DATA_API: "click" + r + ".data-api"
                    },
                    l = "show",
                    f = "collapse",
                    h = "collapsing",
                    d = "collapsed",
                    p = "width",
                    g = {
                        ACTIVES: ".show, .collapsing",
                        DATA_TOGGLE: '[data-toggle="collapse"]'
                    },
                    m = function () {
                        function r(t, n) {
                            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                            for (var r = e(g.DATA_TOGGLE), i = 0; i < r.length; i++) {
                                var o = r[i],
                                    s = O.getSelectorFromElement(o);
                                null !== s && e(s).filter(t).length > 0 && (this._selector = s, this._triggerArray.push(o))
                            }
                            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                        }
                        var s = r.prototype;
                        return s.toggle = function () {
                            e(this._element).hasClass(l) ? this.hide() : this.show()
                        }, s.show = function () {
                            var t, i, o = this;
                            if (!(this._isTransitioning || e(this._element).hasClass(l) || (this._parent && 0 === (t = e.makeArray(e(this._parent).find(g.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), t && (i = e(t).not(this._selector).data(n)) && i._isTransitioning))) {
                                var s = e.Event(u.SHOW);
                                if (e(this._element).trigger(s), !s.isDefaultPrevented()) {
                                    t && (r._jQueryInterface.call(e(t).not(this._selector), "hide"), i || e(t).data(n, null));
                                    var a = this._getDimension();
                                    e(this._element).removeClass(f).addClass(h), this._element.style[a] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var c = function () {
                                        e(o._element).removeClass(h).addClass(f).addClass(l), o._element.style[a] = "", o.setTransitioning(!1), e(o._element).trigger(u.SHOWN)
                                    };
                                    if (O.supportsTransitionEnd()) {
                                        var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                        e(this._element).one(O.TRANSITION_END, c).emulateTransitionEnd(600), this._element.style[a] = this._element[p] + "px"
                                    } else c()
                                }
                            }
                        }, s.hide = function () {
                            var t = this;
                            if (!this._isTransitioning && e(this._element).hasClass(l)) {
                                var n = e.Event(u.HIDE);
                                if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                                    var r = this._getDimension();
                                    if (this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", O.reflow(this._element), e(this._element).addClass(h).removeClass(f).removeClass(l), this._triggerArray.length > 0)
                                        for (var i = 0; i < this._triggerArray.length; i++) {
                                            var o = this._triggerArray[i],
                                                s = O.getSelectorFromElement(o);
                                            null !== s && (e(s).hasClass(l) || e(o).addClass(d).attr("aria-expanded", !1))
                                        }
                                    this.setTransitioning(!0);
                                    var a = function () {
                                        t.setTransitioning(!1), e(t._element).removeClass(h).addClass(f).trigger(u.HIDDEN)
                                    };
                                    this._element.style[r] = "", O.supportsTransitionEnd() ? e(this._element).one(O.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                                }
                            }
                        }, s.setTransitioning = function (e) {
                            this._isTransitioning = e
                        }, s.dispose = function () {
                            e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                        }, s._getConfig = function (e) {
                            return (e = o({}, a, e)).toggle = Boolean(e.toggle), O.typeCheckConfig(t, e, c), e
                        }, s._getDimension = function () {
                            return e(this._element).hasClass(p) ? p : "height"
                        }, s._getParent = function () {
                            var t = this,
                                n = null;
                            O.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                            var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                            return e(n).find(i).each(function (e, n) {
                                t._addAriaAndCollapsedClass(r._getTargetFromElement(n), [n])
                            }), n
                        }, s._addAriaAndCollapsedClass = function (t, n) {
                            if (t) {
                                var r = e(t).hasClass(l);
                                n.length > 0 && e(n).toggleClass(d, !r).attr("aria-expanded", r)
                            }
                        }, r._getTargetFromElement = function (t) {
                            var n = O.getSelectorFromElement(t);
                            return n ? e(n)[0] : null
                        }, r._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = e(this),
                                    s = i.data(n),
                                    c = o({}, a, i.data(), "object" == (void 0 === t ? "undefined" : _typeof(t)) && t);
                                if (!s && c.toggle && /show|hide/.test(t) && (c.toggle = !1), s || (s = new r(this, c), i.data(n, s)), "string" == typeof t) {
                                    if (void 0 === s[t]) throw new TypeError('No method named "' + t + '"');
                                    s[t]()
                                }
                            })
                        }, i(r, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }]), r
                    }();
                return e(document).on(u.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
                    "A" === t.currentTarget.tagName && t.preventDefault();
                    var r = e(this),
                        i = O.getSelectorFromElement(this);
                    e(i).each(function () {
                        var t = e(this),
                            i = t.data(n) ? "toggle" : r.data();
                        m._jQueryInterface.call(t, i)
                    })
                }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function () {
                    return e.fn[t] = s, m._jQueryInterface
                }, m
            }(t),
            L = function (e) {
                var t = "dropdown",
                    r = "bs.dropdown",
                    s = "." + r,
                    a = ".data-api",
                    c = e.fn[t],
                    u = new RegExp("38|40|27"),
                    l = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        CLICK: "click" + s,
                        CLICK_DATA_API: "click" + s + a,
                        KEYDOWN_DATA_API: "keydown" + s + a,
                        KEYUP_DATA_API: "keyup" + s + a
                    },
                    f = "disabled",
                    h = "show",
                    d = "dropup",
                    p = "dropdown-menu-right",
                    g = '[data-toggle="dropdown"]',
                    m = ".dropdown-menu",
                    v = {
                        offset: 0,
                        flip: !0,
                        boundary: "scrollParent"
                    },
                    y = {
                        offset: "(number|string|function)",
                        flip: "boolean",
                        boundary: "(string|element)"
                    },
                    b = function () {
                        function a(e, t) {
                            this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                        }
                        var c = a.prototype;
                        return c.toggle = function () {
                            if (!this._element.disabled && !e(this._element).hasClass(f)) {
                                var t = a._getParentFromElement(this._element),
                                    r = e(this._menu).hasClass(h);
                                if (a._clearMenus(), !r) {
                                    var i = {
                                        relatedTarget: this._element
                                    },
                                        o = e.Event(l.SHOW, i);
                                    if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                        if (!this._inNavbar) {
                                            if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                            var s = this._element;
                                            e(t).hasClass(d) && (e(this._menu).hasClass("dropdown-menu-left") || e(this._menu).hasClass(p)) && (s = t), "scrollParent" !== this._config.boundary && e(t).addClass("position-static"), this._popper = new n(s, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && 0 === e(t).closest(".navbar-nav").length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(h), e(t).toggleClass(h).trigger(e.Event(l.SHOWN, i))
                                    }
                                }
                            }
                        }, c.dispose = function () {
                            e.removeData(this._element, r), e(this._element).off(s), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                        }, c.update = function () {
                            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                        }, c._addEventListeners = function () {
                            var t = this;
                            e(this._element).on(l.CLICK, function (e) {
                                e.preventDefault(), e.stopPropagation(), t.toggle()
                            })
                        }, c._getConfig = function (n) {
                            return n = o({}, this.constructor.Default, e(this._element).data(), n), O.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }, c._getMenuElement = function () {
                            if (!this._menu) {
                                var t = a._getParentFromElement(this._element);
                                this._menu = e(t).find(m)[0]
                            }
                            return this._menu
                        }, c._getPlacement = function () {
                            var t = e(this._element).parent(),
                                n = "bottom-start";
                            return t.hasClass(d) ? (n = "top-start", e(this._menu).hasClass(p) && (n = "top-end")) : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass(p) && (n = "bottom-end"), n
                        }, c._detectNavbar = function () {
                            return e(this._element).closest(".navbar").length > 0
                        }, c._getPopperConfig = function () {
                            var e = this,
                                t = {};
                            return "function" == typeof this._config.offset ? t.fn = function (t) {
                                return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
                            } : t.offset = this._config.offset, {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: t,
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                }
                        }, a._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data(r);
                                if (n || (n = new a(this, "object" == (void 0 === t ? "undefined" : _typeof(t)) ? t : null), e(this).data(r, n)), "string" == typeof t) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }, a._clearMenus = function (t) {
                            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                                for (var n = e.makeArray(e(g)), i = 0; i < n.length; i++) {
                                    var o = a._getParentFromElement(n[i]),
                                        s = e(n[i]).data(r),
                                        c = {
                                            relatedTarget: n[i]
                                        };
                                    if (s) {
                                        var u = s._menu;
                                        if (e(o).hasClass(h) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(o, t.target))) {
                                            var f = e.Event(l.HIDE, c);
                                            e(o).trigger(f), f.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), n[i].setAttribute("aria-expanded", "false"), e(u).removeClass(h), e(o).removeClass(h).trigger(e.Event(l.HIDDEN, c)))
                                        }
                                    }
                                }
                        }, a._getParentFromElement = function (t) {
                            var n, r = O.getSelectorFromElement(t);
                            return r && (n = e(r)[0]), n || t.parentNode
                        }, a._dataApiKeydownHandler = function (t) {
                            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(m).length)) : u.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(f))) {
                                var n = a._getParentFromElement(this),
                                    r = e(n).hasClass(h);
                                if ((r || 27 === t.which && 32 === t.which) && (!r || 27 !== t.which && 32 !== t.which)) {
                                    var i = e(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                    if (0 !== i.length) {
                                        var o = i.indexOf(t.target);
                                        38 === t.which && o > 0 && o-- , 40 === t.which && o < i.length - 1 && o++ , o < 0 && (o = 0), i[o].focus()
                                    }
                                } else {
                                    if (27 === t.which) {
                                        var s = e(n).find(g)[0];
                                        e(s).trigger("focus")
                                    }
                                    e(this).trigger("click")
                                }
                            }
                        }, i(a, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return v
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return y
                            }
                        }]), a
                    }();
                return e(document).on(l.KEYDOWN_DATA_API, g, b._dataApiKeydownHandler).on(l.KEYDOWN_DATA_API, m, b._dataApiKeydownHandler).on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, b._clearMenus).on(l.CLICK_DATA_API, g, function (t) {
                    t.preventDefault(), t.stopPropagation(), b._jQueryInterface.call(e(this), "toggle")
                }).on(l.CLICK_DATA_API, ".dropdown form", function (e) {
                    e.stopPropagation()
                }), e.fn[t] = b._jQueryInterface, e.fn[t].Constructor = b, e.fn[t].noConflict = function () {
                    return e.fn[t] = c, b._jQueryInterface
                }, b
            }(t),
            $ = function (e) {
                var t = "bs.modal",
                    n = "." + t,
                    r = e.fn.modal,
                    s = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    a = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    c = {
                        HIDE: "hide" + n,
                        HIDDEN: "hidden" + n,
                        SHOW: "show" + n,
                        SHOWN: "shown" + n,
                        FOCUSIN: "focusin" + n,
                        RESIZE: "resize" + n,
                        CLICK_DISMISS: "click.dismiss" + n,
                        KEYDOWN_DISMISS: "keydown.dismiss" + n,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                        CLICK_DATA_API: "click" + n + ".data-api"
                    },
                    u = "modal-open",
                    l = "fade",
                    f = "show",
                    h = {
                        DIALOG: ".modal-dialog",
                        DATA_TOGGLE: '[data-toggle="modal"]',
                        DATA_DISMISS: '[data-dismiss="modal"]',
                        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        STICKY_CONTENT: ".sticky-top",
                        NAVBAR_TOGGLER: ".navbar-toggler"
                    },
                    d = function () {
                        function r(t, n) {
                            this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(h.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                        }
                        var d = r.prototype;
                        return d.toggle = function (e) {
                            return this._isShown ? this.hide() : this.show(e)
                        }, d.show = function (t) {
                            var n = this;
                            if (!this._isTransitioning && !this._isShown) {
                                O.supportsTransitionEnd() && e(this._element).hasClass(l) && (this._isTransitioning = !0);
                                var r = e.Event(c.SHOW, {
                                    relatedTarget: t
                                });
                                e(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(u), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, h.DATA_DISMISS, function (e) {
                                    return n.hide(e)
                                }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                                    e(n._element).one(c.MOUSEUP_DISMISS, function (t) {
                                        e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                                    })
                                }), this._showBackdrop(function () {
                                    return n._showElement(t)
                                }))
                            }
                        }, d.hide = function (t) {
                            var n = this;
                            if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                                var r = e.Event(c.HIDE);
                                if (e(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                                    this._isShown = !1;
                                    var i = O.supportsTransitionEnd() && e(this._element).hasClass(l);
                                    i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(f), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), i ? e(this._element).one(O.TRANSITION_END, function (e) {
                                        return n._hideModal(e)
                                    }).emulateTransitionEnd(300) : this._hideModal()
                                }
                            }
                        }, d.dispose = function () {
                            e.removeData(this._element, t), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                        }, d.handleUpdate = function () {
                            this._adjustDialog()
                        }, d._getConfig = function (e) {
                            return e = o({}, s, e), O.typeCheckConfig("modal", e, a), e
                        }, d._showElement = function (t) {
                            var n = this,
                                r = O.supportsTransitionEnd() && e(this._element).hasClass(l);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, r && O.reflow(this._element), e(this._element).addClass(f), this._config.focus && this._enforceFocus();
                            var i = e.Event(c.SHOWN, {
                                relatedTarget: t
                            }),
                                o = function () {
                                    n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(i)
                                };
                            r ? e(this._dialog).one(O.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                        }, d._enforceFocus = function () {
                            var t = this;
                            e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (n) {
                                document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                            })
                        }, d._setEscapeEvent = function () {
                            var t = this;
                            this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                                27 === e.which && (e.preventDefault(), t.hide())
                            }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS)
                        }, d._setResizeEvent = function () {
                            var t = this;
                            this._isShown ? e(window).on(c.RESIZE, function (e) {
                                return t.handleUpdate(e)
                            }) : e(window).off(c.RESIZE)
                        }, d._hideModal = function () {
                            var t = this;
                            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                                e(document.body).removeClass(u), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN)
                            })
                        }, d._removeBackdrop = function () {
                            this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                        }, d._showBackdrop = function (t) {
                            var n = this,
                                r = e(this._element).hasClass(l) ? l : "";
                            if (this._isShown && this._config.backdrop) {
                                var i = O.supportsTransitionEnd() && r;
                                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", r && e(this._backdrop).addClass(r), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
                                    n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                                }), i && O.reflow(this._backdrop), e(this._backdrop).addClass(f), !t) return;
                                if (!i) return void t();
                                e(this._backdrop).one(O.TRANSITION_END, t).emulateTransitionEnd(150)
                            } else if (!this._isShown && this._backdrop) {
                                e(this._backdrop).removeClass(f);
                                var o = function () {
                                    n._removeBackdrop(), t && t()
                                };
                                O.supportsTransitionEnd() && e(this._element).hasClass(l) ? e(this._backdrop).one(O.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                            } else t && t()
                        }, d._adjustDialog = function () {
                            var e = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }, d._resetAdjustments = function () {
                            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                        }, d._checkScrollbar = function () {
                            var e = document.body.getBoundingClientRect();
                            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                        }, d._setScrollbar = function () {
                            var t = this;
                            if (this._isBodyOverflowing) {
                                e(h.FIXED_CONTENT).each(function (n, r) {
                                    var i = e(r)[0].style.paddingRight,
                                        o = e(r).css("padding-right");
                                    e(r).data("padding-right", i).css("padding-right", parseFloat(o) + t._scrollbarWidth + "px")
                                }), e(h.STICKY_CONTENT).each(function (n, r) {
                                    var i = e(r)[0].style.marginRight,
                                        o = e(r).css("margin-right");
                                    e(r).data("margin-right", i).css("margin-right", parseFloat(o) - t._scrollbarWidth + "px")
                                }), e(h.NAVBAR_TOGGLER).each(function (n, r) {
                                    var i = e(r)[0].style.marginRight,
                                        o = e(r).css("margin-right");
                                    e(r).data("margin-right", i).css("margin-right", parseFloat(o) + t._scrollbarWidth + "px")
                                });
                                var n = document.body.style.paddingRight,
                                    r = e("body").css("padding-right");
                                e("body").data("padding-right", n).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                            }
                        }, d._resetScrollbar = function () {
                            e(h.FIXED_CONTENT).each(function (t, n) {
                                var r = e(n).data("padding-right");
                                void 0 !== r && e(n).css("padding-right", r).removeData("padding-right")
                            }), e(h.STICKY_CONTENT + ", " + h.NAVBAR_TOGGLER).each(function (t, n) {
                                var r = e(n).data("margin-right");
                                void 0 !== r && e(n).css("margin-right", r).removeData("margin-right")
                            });
                            var t = e("body").data("padding-right");
                            void 0 !== t && e("body").css("padding-right", t).removeData("padding-right")
                        }, d._getScrollbarWidth = function () {
                            var e = document.createElement("div");
                            e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                            var t = e.getBoundingClientRect().width - e.clientWidth;
                            return document.body.removeChild(e), t
                        }, r._jQueryInterface = function (n, i) {
                            return this.each(function () {
                                var s = e(this).data(t),
                                    a = o({}, r.Default, e(this).data(), "object" == (void 0 === n ? "undefined" : _typeof(n)) && n);
                                if (s || (s = new r(this, a), e(this).data(t, s)), "string" == typeof n) {
                                    if (void 0 === s[n]) throw new TypeError('No method named "' + n + '"');
                                    s[n](i)
                                } else a.show && s.show(i)
                            })
                        }, i(r, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return s
                            }
                        }]), r
                    }();
                return e(document).on(c.CLICK_DATA_API, h.DATA_TOGGLE, function (n) {
                    var r, i = this,
                        s = O.getSelectorFromElement(this);
                    s && (r = e(s)[0]);
                    var a = e(r).data(t) ? "toggle" : o({}, e(r).data(), e(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
                    var u = e(r).one(c.SHOW, function (t) {
                        t.isDefaultPrevented() || u.one(c.HIDDEN, function () {
                            e(i).is(":visible") && i.focus()
                        })
                    });
                    d._jQueryInterface.call(e(r), a, this)
                }), e.fn.modal = d._jQueryInterface, e.fn.modal.Constructor = d, e.fn.modal.noConflict = function () {
                    return e.fn.modal = r, d._jQueryInterface
                }, d
            }(t),
            q = function (e) {
                var t = "tooltip",
                    r = "bs.tooltip",
                    s = "." + r,
                    a = e.fn[t],
                    c = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                    u = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)"
                    },
                    l = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: "right",
                        BOTTOM: "bottom",
                        LEFT: "left"
                    },
                    f = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: 0,
                        container: !1,
                        fallbackPlacement: "flip",
                        boundary: "scrollParent"
                    },
                    h = "show",
                    d = "out",
                    p = {
                        HIDE: "hide" + s,
                        HIDDEN: "hidden" + s,
                        SHOW: "show" + s,
                        SHOWN: "shown" + s,
                        INSERTED: "inserted" + s,
                        CLICK: "click" + s,
                        FOCUSIN: "focusin" + s,
                        FOCUSOUT: "focusout" + s,
                        MOUSEENTER: "mouseenter" + s,
                        MOUSELEAVE: "mouseleave" + s
                    },
                    g = "fade",
                    m = "show",
                    v = "hover",
                    y = "focus",
                    b = function () {
                        function a(e, t) {
                            if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                        }
                        var b = a.prototype;
                        return b.enable = function () {
                            this._isEnabled = !0
                        }, b.disable = function () {
                            this._isEnabled = !1
                        }, b.toggleEnabled = function () {
                            this._isEnabled = !this._isEnabled
                        }, b.toggle = function (t) {
                            if (this._isEnabled)
                                if (t) {
                                    var n = this.constructor.DATA_KEY,
                                        r = e(t.currentTarget).data(n);
                                    r || (r = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                                } else {
                                    if (e(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                                    this._enter(null, this)
                                }
                        }, b.dispose = function () {
                            clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                        }, b.show = function () {
                            var t = this;
                            if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                            var r = e.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                e(this.element).trigger(r);
                                var i = e.contains(this.element.ownerDocument.documentElement, this.element);
                                if (r.isDefaultPrevented() || !i) return;
                                var o = this.getTipElement(),
                                    s = O.getUID(this.constructor.NAME);
                                o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && e(o).addClass(g);
                                var c = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                    u = this._getAttachment(c);
                                this.addAttachmentClass(u);
                                var l = !1 === this.config.container ? document.body : e(this.config.container);
                                e(o).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(o).appendTo(l), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, o, {
                                    placement: u,
                                    modifiers: {
                                        offset: {
                                            offset: this.config.offset
                                        },
                                        flip: {
                                            behavior: this.config.fallbackPlacement
                                        },
                                        arrow: {
                                            element: ".arrow"
                                        },
                                        preventOverflow: {
                                            boundariesElement: this.config.boundary
                                        }
                                    },
                                    onCreate: function (e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                    },
                                    onUpdate: function (e) {
                                        t._handlePopperPlacementChange(e)
                                    }
                                }), e(o).addClass(m), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                                var f = function () {
                                    t.config.animation && t._fixTransition();
                                    var n = t._hoverState;
                                    t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), n === d && t._leave(null, t)
                                };
                                O.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(this.tip).one(O.TRANSITION_END, f).emulateTransitionEnd(a._TRANSITION_DURATION) : f()
                            }
                        }, b.hide = function (t) {
                            var n = this,
                                r = this.getTipElement(),
                                i = e.Event(this.constructor.Event.HIDE),
                                o = function () {
                                    n._hoverState !== h && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
                                };
                            e(this.element).trigger(i), i.isDefaultPrevented() || (e(r).removeClass(m), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger[y] = !1, this._activeTrigger[v] = !1, O.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(r).one(O.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                        }, b.update = function () {
                            null !== this._popper && this._popper.scheduleUpdate()
                        }, b.isWithContent = function () {
                            return Boolean(this.getTitle())
                        }, b.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-tooltip-" + t)
                        }, b.getTipElement = function () {
                            return this.tip = this.tip || e(this.config.template)[0], this.tip
                        }, b.setContent = function () {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(".tooltip-inner"), this.getTitle()), t.removeClass(g + " " + m)
                        }, b.setElementContent = function (t, n) {
                            var r = this.config.html;
                            "object" == (void 0 === n ? "undefined" : _typeof(n)) && (n.nodeType || n.jquery) ? r ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text()) : t[r ? "html" : "text"](n)
                        }, b.getTitle = function () {
                            var e = this.element.getAttribute("data-original-title");
                            return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                        }, b._getAttachment = function (e) {
                            return l[e.toUpperCase()]
                        }, b._setListeners = function () {
                            var t = this;
                            this.config.trigger.split(" ").forEach(function (n) {
                                if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                                    return t.toggle(e)
                                });
                                else if ("manual" !== n) {
                                    var r = n === v ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                        i = n === v ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                                    e(t.element).on(r, t.config.selector, function (e) {
                                        return t._enter(e)
                                    }).on(i, t.config.selector, function (e) {
                                        return t._leave(e)
                                    })
                                }
                                e(t.element).closest(".modal").on("hide.bs.modal", function () {
                                    return t.hide()
                                })
                            }), this.config.selector ? this.config = o({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            }) : this._fixTitle()
                        }, b._fixTitle = function () {
                            var e = _typeof(this.element.getAttribute("data-original-title"));
                            (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                        }, b._enter = function (t, n) {
                            var r = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusin" === t.type ? y : v] = !0), e(n.getTipElement()).hasClass(m) || n._hoverState === h ? n._hoverState = h : (clearTimeout(n._timeout), n._hoverState = h, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                                n._hoverState === h && n.show()
                            }, n.config.delay.show) : n.show())
                        }, b._leave = function (t, n) {
                            var r = this.constructor.DATA_KEY;
                            (n = n || e(t.currentTarget).data(r)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, n)), t && (n._activeTrigger["focusout" === t.type ? y : v] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                                n._hoverState === d && n.hide()
                            }, n.config.delay.hide) : n.hide())
                        }, b._isWithActiveTrigger = function () {
                            for (var e in this._activeTrigger)
                                if (this._activeTrigger[e]) return !0;
                            return !1
                        }, b._getConfig = function (n) {
                            return "number" == typeof (n = o({}, this.constructor.Default, e(this.element).data(), n)).delay && (n.delay = {
                                show: n.delay,
                                hide: n.delay
                            }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), O.typeCheckConfig(t, n, this.constructor.DefaultType), n
                        }, b._getDelegateConfig = function () {
                            var e = {};
                            if (this.config)
                                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                            return e
                        }, b._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(c);
                            null !== n && n.length > 0 && t.removeClass(n.join(""))
                        }, b._handlePopperPlacementChange = function (e) {
                            this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                        }, b._fixTransition = function () {
                            var t = this.getTipElement(),
                                n = this.config.animation;
                            null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                        }, a._jQueryInterface = function (t) {
                            return this.each(function () {
                                var n = e(this).data(r),
                                    i = "object" == (void 0 === t ? "undefined" : _typeof(t)) && t;
                                if ((n || !/dispose|hide/.test(t)) && (n || (n = new a(this, i), e(this).data(r, n)), "string" == typeof t)) {
                                    if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                    n[t]()
                                }
                            })
                        }, i(a, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return f
                            }
                        }, {
                            key: "NAME",
                            get: function () {
                                return t
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function () {
                                return r
                            }
                        }, {
                            key: "Event",
                            get: function () {
                                return p
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function () {
                                return s
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return u
                            }
                        }]), a
                    }();
                return e.fn[t] = b._jQueryInterface, e.fn[t].Constructor = b, e.fn[t].noConflict = function () {
                    return e.fn[t] = a, b._jQueryInterface
                }, b
            }(t),
            H = function (e) {
                var t = "popover",
                    n = "bs.popover",
                    r = "." + n,
                    s = e.fn[t],
                    a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                    c = o({}, q.Default, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    }),
                    u = o({}, q.DefaultType, {
                        content: "(string|element|function)"
                    }),
                    l = {
                        HIDE: "hide" + r,
                        HIDDEN: "hidden" + r,
                        SHOW: "show" + r,
                        SHOWN: "shown" + r,
                        INSERTED: "inserted" + r,
                        CLICK: "click" + r,
                        FOCUSIN: "focusin" + r,
                        FOCUSOUT: "focusout" + r,
                        MOUSEENTER: "mouseenter" + r,
                        MOUSELEAVE: "mouseleave" + r
                    },
                    f = function (o) {
                        function s() {
                            return o.apply(this, arguments) || this
                        }
                        var f, h;
                        h = o, (f = s).prototype = Object.create(h.prototype), f.prototype.constructor = f, f.__proto__ = h;
                        var d = s.prototype;
                        return d.isWithContent = function () {
                            return this.getTitle() || this._getContent()
                        }, d.addAttachmentClass = function (t) {
                            e(this.getTipElement()).addClass("bs-popover-" + t)
                        }, d.getTipElement = function () {
                            return this.tip = this.tip || e(this.config.template)[0], this.tip
                        }, d.setContent = function () {
                            var t = e(this.getTipElement());
                            this.setElementContent(t.find(".popover-header"), this.getTitle());
                            var n = this._getContent();
                            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
                        }, d._getContent = function () {
                            return this.element.getAttribute("data-content") || this.config.content
                        }, d._cleanTipClass = function () {
                            var t = e(this.getTipElement()),
                                n = t.attr("class").match(a);
                            null !== n && n.length > 0 && t.removeClass(n.join(""))
                        }, s._jQueryInterface = function (t) {
                            return this.each(function () {
                                var r = e(this).data(n),
                                    i = "object" == (void 0 === t ? "undefined" : _typeof(t)) ? t : null;
                                if ((r || !/destroy|hide/.test(t)) && (r || (r = new s(this, i), e(this).data(n, r)), "string" == typeof t)) {
                                    if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                    r[t]()
                                }
                            })
                        }, i(s, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return c
                            }
                        }, {
                            key: "NAME",
                            get: function () {
                                return t
                            }
                        }, {
                            key: "DATA_KEY",
                            get: function () {
                                return n
                            }
                        }, {
                            key: "Event",
                            get: function () {
                                return l
                            }
                        }, {
                            key: "EVENT_KEY",
                            get: function () {
                                return r
                            }
                        }, {
                            key: "DefaultType",
                            get: function () {
                                return u
                            }
                        }]), s
                    }(q);
                return e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function () {
                    return e.fn[t] = s, f._jQueryInterface
                }, f
            }(t),
            M = function (e) {
                var t = "scrollspy",
                    n = "bs.scrollspy",
                    r = "." + n,
                    s = e.fn[t],
                    a = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    c = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    u = {
                        ACTIVATE: "activate" + r,
                        SCROLL: "scroll" + r,
                        LOAD_DATA_API: "load" + r + ".data-api"
                    },
                    l = "active",
                    f = {
                        DATA_SPY: '[data-spy="scroll"]',
                        ACTIVE: ".active",
                        NAV_LIST_GROUP: ".nav, .list-group",
                        NAV_LINKS: ".nav-link",
                        NAV_ITEMS: ".nav-item",
                        LIST_ITEMS: ".list-group-item",
                        DROPDOWN: ".dropdown",
                        DROPDOWN_ITEMS: ".dropdown-item",
                        DROPDOWN_TOGGLE: ".dropdown-toggle"
                    },
                    h = "position",
                    d = function () {
                        function s(t, n) {
                            var r = this;
                            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(u.SCROLL, function (e) {
                                return r._process(e)
                            }), this.refresh(), this._process()
                        }
                        var d = s.prototype;
                        return d.refresh = function () {
                            var t = this,
                                n = this._scrollElement === this._scrollElement.window ? "offset" : h,
                                r = "auto" === this._config.method ? n : this._config.method,
                                i = r === h ? this._getScrollTop() : 0;
                            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                                var n, o = O.getSelectorFromElement(t);
                                if (o && (n = e(o)[0]), n) {
                                    var s = n.getBoundingClientRect();
                                    if (s.width || s.height) return [e(n)[r]().top + i, o]
                                }
                                return null
                            }).filter(function (e) {
                                return e
                            }).sort(function (e, t) {
                                return e[0] - t[0]
                            }).forEach(function (e) {
                                t._offsets.push(e[0]), t._targets.push(e[1])
                            })
                        }, d.dispose = function () {
                            e.removeData(this._element, n), e(this._scrollElement).off(r), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                        }, d._getConfig = function (n) {
                            if ("string" != typeof (n = o({}, a, n)).target) {
                                var r = e(n.target).attr("id");
                                r || (r = O.getUID(t), e(n.target).attr("id", r)), n.target = "#" + r
                            }
                            return O.typeCheckConfig(t, n, c), n
                        }, d._getScrollTop = function () {
                            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                        }, d._getScrollHeight = function () {
                            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                        }, d._getOffsetHeight = function () {
                            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                        }, d._process = function () {
                            var e = this._getScrollTop() + this._config.offset,
                                t = this._getScrollHeight(),
                                n = this._config.offset + t - this._getOffsetHeight();
                            if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                var r = this._targets[this._targets.length - 1];
                                this._activeTarget !== r && this._activate(r)
                            } else {
                                if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                                for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                            }
                        }, d._activate = function (t) {
                            this._activeTarget = t, this._clear();
                            var n = this._selector.split(",");
                            n = n.map(function (e) {
                                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                            });
                            var r = e(n.join(","));
                            r.hasClass("dropdown-item") ? (r.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(l), r.addClass(l)) : (r.addClass(l), r.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(l), r.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(l)), e(this._scrollElement).trigger(u.ACTIVATE, {
                                relatedTarget: t
                            })
                        }, d._clear = function () {
                            e(this._selector).filter(f.ACTIVE).removeClass(l)
                        }, s._jQueryInterface = function (t) {
                            return this.each(function () {
                                var r = e(this).data(n);
                                if (r || (r = new s(this, "object" == (void 0 === t ? "undefined" : _typeof(t)) && t), e(this).data(n, r)), "string" == typeof t) {
                                    if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                    r[t]()
                                }
                            })
                        }, i(s, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return a
                            }
                        }]), s
                    }();
                return e(window).on(u.LOAD_DATA_API, function () {
                    for (var t = e.makeArray(e(f.DATA_SPY)), n = t.length; n--;) {
                        var r = e(t[n]);
                        d._jQueryInterface.call(r, r.data())
                    }
                }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
                    return e.fn[t] = s, d._jQueryInterface
                }, d
            }(t),
            U = function (e) {
                var t = "bs.tab",
                    n = "." + t,
                    r = e.fn.tab,
                    o = {
                        HIDE: "hide" + n,
                        HIDDEN: "hidden" + n,
                        SHOW: "show" + n,
                        SHOWN: "shown" + n,
                        CLICK_DATA_API: "click.bs.tab.data-api"
                    },
                    s = "active",
                    a = "show",
                    c = ".active",
                    u = "> li > .active",
                    l = function () {
                        function n(e) {
                            this._element = e
                        }
                        var r = n.prototype;
                        return r.show = function () {
                            var t = this;
                            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(s) || e(this._element).hasClass("disabled"))) {
                                var n, r, i = e(this._element).closest(".nav, .list-group")[0],
                                    a = O.getSelectorFromElement(this._element);
                                if (i) {
                                    var l = "UL" === i.nodeName ? u : c;
                                    r = (r = e.makeArray(e(i).find(l)))[r.length - 1]
                                }
                                var f = e.Event(o.HIDE, {
                                    relatedTarget: this._element
                                }),
                                    h = e.Event(o.SHOW, {
                                        relatedTarget: r
                                    });
                                if (r && e(r).trigger(f), e(this._element).trigger(h), !h.isDefaultPrevented() && !f.isDefaultPrevented()) {
                                    a && (n = e(a)[0]), this._activate(this._element, i);
                                    var d = function () {
                                        var n = e.Event(o.HIDDEN, {
                                            relatedTarget: t._element
                                        }),
                                            i = e.Event(o.SHOWN, {
                                                relatedTarget: r
                                            });
                                        e(r).trigger(n), e(t._element).trigger(i)
                                    };
                                    n ? this._activate(n, n.parentNode, d) : d()
                                }
                            }
                        }, r.dispose = function () {
                            e.removeData(this._element, t), this._element = null
                        }, r._activate = function (t, n, r) {
                            var i = this,
                                o = ("UL" === n.nodeName ? e(n).find(u) : e(n).children(c))[0],
                                s = r && O.supportsTransitionEnd() && o && e(o).hasClass("fade"),
                                a = function () {
                                    return i._transitionComplete(t, o, r)
                                };
                            o && s ? e(o).one(O.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                        }, r._transitionComplete = function (t, n, r) {
                            if (n) {
                                e(n).removeClass(a + " " + s);
                                var i = e(n.parentNode).find("> .dropdown-menu .active")[0];
                                i && e(i).removeClass(s), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                            }
                            if (e(t).addClass(s), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), O.reflow(t), e(t).addClass(a), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
                                var o = e(t).closest(".dropdown")[0];
                                o && e(o).find(".dropdown-toggle").addClass(s), t.setAttribute("aria-expanded", !0)
                            }
                            r && r()
                        }, n._jQueryInterface = function (r) {
                            return this.each(function () {
                                var i = e(this),
                                    o = i.data(t);
                                if (o || (o = new n(this), i.data(t, o)), "string" == typeof r) {
                                    if (void 0 === o[r]) throw new TypeError('No method named "' + r + '"');
                                    o[r]()
                                }
                            })
                        }, i(n, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.0.0"
                            }
                        }]), n
                    }();
                return e(document).on(o.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
                    t.preventDefault(), l._jQueryInterface.call(e(this), "show")
                }), e.fn.tab = l._jQueryInterface, e.fn.tab.Constructor = l, e.fn.tab.noConflict = function () {
                    return e.fn.tab = r, l._jQueryInterface
                }, l
            }(t);
        ! function (e) {
            if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(t), e.Util = O, e.Alert = B, e.Button = j, e.Carousel = P, e.Collapse = R, e.Dropdown = L, e.Modal = $, e.Popover = H, e.Scrollspy = M, e.Tab = U, e.Tooltip = q, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }), jQuery.extend({
        bez: function (e, t) {
            if (jQuery.isArray(e) && (t = e, e = "bez_" + t.join("_").replace(/\./g, "p")), "function" != typeof jQuery.easing[e]) {
                var n = function (e, t) {
                    var n = [null, null],
                        r = [null, null],
                        i = [null, null],
                        o = function (o, s) {
                            return i[s] = 3 * e[s], r[s] = 3 * (t[s] - e[s]) - i[s], n[s] = 1 - i[s] - r[s], o * (i[s] + o * (r[s] + o * n[s]))
                        },
                        s = function (e) {
                            return i[0] + e * (2 * r[0] + 3 * n[0] * e)
                        },
                        a = function (e) {
                            for (var t, n = e, r = 0; ++r < 14 && (t = o(n, 0) - e, !(Math.abs(t) < .001));) n -= t / s(n);
                            return n
                        };
                    return function (e) {
                        return o(a(e), 1)
                    }
                };
                jQuery.easing[e] = function (e, r, i, o, s) {
                    return o * n([t[0], t[1]], [t[2], t[3]])(r / s) + i
                }
            }
            return e
        }
    }),
    function (e, t) {
        "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports.io = t() : e.io = t()
    }(this, function () {
        return function (e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function (e, t, n) {
            "use strict";

            function r(e, t) {
                "object" === (void 0 === e ? "undefined" : i(e)) && (t = e, e = void 0), t = t || {};
                var n, r = o(e),
                    s = r.source,
                    l = r.id,
                    f = r.path,
                    h = u[l] && f in u[l].nsps;
                return t.forceNew || t["force new connection"] || !1 === t.multiplex || h ? (c("ignoring socket cache for %s", s), n = a(s, t)) : (u[l] || (c("new io instance for %s", s), u[l] = a(s, t)), n = u[l]), r.query && !t.query && (t.query = r.query), n.socket(r.path, t)
            }
            var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : _typeof(e)
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
            },
                o = n(1),
                s = n(7),
                a = n(13),
                c = n(3)("socket.io-client");
            e.exports = t = r;
            var u = t.managers = {};
            t.protocol = s.protocol, t.connect = r, t.Manager = n(13), t.Socket = n(37)
        }, function (e, t, n) {
            (function (t) {
                "use strict";

                function r(e, n) {
                    var r = e;
                    n = n || t.location, null == e && (e = n.protocol + "//" + n.host), "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e), /^(https?|wss?):\/\//.test(e) || (o("protocol-less url %s", e), e = void 0 !== n ? n.protocol + "//" + e : "https://" + e), o("parse %s", e), r = i(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
                    var s = -1 !== r.host.indexOf(":"),
                        a = s ? "[" + r.host + "]" : r.host;
                    return r.id = r.protocol + "://" + a + ":" + r.port, r.href = r.protocol + "://" + a + (n && n.port === r.port ? "" : ":" + r.port), r
                }
                var i = n(2),
                    o = n(3)("socket.io-client:url");
                e.exports = r
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            e.exports = function (e) {
                var t = e,
                    i = e.indexOf("["),
                    o = e.indexOf("]"); - 1 != i && -1 != o && (e = e.substring(0, i) + e.substring(i, o).replace(/:/g, ";") + e.substring(o, e.length));
                for (var s = n.exec(e || ""), a = {}, c = 14; c--;) a[r[c]] = s[c] || "";
                return -1 != i && -1 != o && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
            }
        }, function (e, t, n) {
            (function (r) {
                function i() {
                    return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
                }

                function o(e) {
                    var n = this.useColors;
                    if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
                        var r = "color: " + this.color;
                        e.splice(1, 0, r, "color: inherit");
                        var i = 0,
                            o = 0;
                        e[0].replace(/%[a-zA-Z%]/g, function (e) {
                            "%%" !== e && (i++ , "%c" === e && (o = i))
                        }), e.splice(o, 0, r)
                    }
                }

                function s() {
                    return "object" == ("undefined" == typeof console ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments)
                }

                function a(e) {
                    try {
                        null == e ? t.storage.removeItem("debug") : t.storage.debug = e
                    } catch (e) { }
                }

                function c() {
                    var e;
                    try {
                        e = t.storage.debug
                    } catch (e) { }
                    return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
                }
                t = e.exports = n(5), t.log = s, t.formatArgs = o, t.save = a, t.load = c, t.useColors = i, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
                    try {
                        return window.localStorage
                    } catch (e) { }
                }(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
                    try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[UnexpectedJSONParseError]: " + e.message
                    }
                }, t.enable(c())
            }).call(t, n(4))
        }, function (e, t) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function r() {
                throw new Error("clearTimeout has not been defined")
            }

            function i(e) {
                if (l === setTimeout) return setTimeout(e, 0);
                if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
                try {
                    return l(e, 0)
                } catch (t) {
                    try {
                        return l.call(null, e, 0)
                    } catch (t) {
                        return l.call(this, e, 0)
                    }
                }
            }

            function o(e) {
                if (f === clearTimeout) return clearTimeout(e);
                if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
                try {
                    return f(e)
                } catch (t) {
                    try {
                        return f.call(null, e)
                    } catch (t) {
                        return f.call(this, e)
                    }
                }
            }

            function s() {
                g && d && (g = !1, d.length ? p = d.concat(p) : m = -1, p.length && a())
            }

            function a() {
                if (!g) {
                    var e = i(s);
                    g = !0;
                    for (var t = p.length; t;) {
                        for (d = p, p = []; ++m < t;) d && d[m].run();
                        m = -1, t = p.length
                    }
                    d = null, g = !1, o(e)
                }
            }

            function c(e, t) {
                this.fun = e, this.array = t
            }

            function u() { }
            var l, f, h = e.exports = {};
            ! function () {
                try {
                    l = "function" == typeof setTimeout ? setTimeout : n
                } catch (e) {
                    l = n
                }
                try {
                    f = "function" == typeof clearTimeout ? clearTimeout : r
                } catch (e) {
                    f = r
                }
            }();
            var d, p = [],
                g = !1,
                m = -1;
            h.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                p.push(new c(e, t)), 1 !== p.length || g || i(a)
            }, c.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function (e) {
                return []
            }, h.binding = function (e) {
                throw new Error("process.binding is not supported")
            }, h.cwd = function () {
                return "/"
            }, h.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            }, h.umask = function () {
                return 0
            }
        }, function (e, t, n) {
            function r(e) {
                var n, r = 0;
                for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
                return t.colors[Math.abs(r) % t.colors.length]
            }

            function i(e) {
                function n() {
                    if (n.enabled) {
                        var e = n,
                            r = +new Date,
                            i = r - (u || r);
                        e.diff = i, e.prev = u, e.curr = r, u = r;
                        for (var o = new Array(arguments.length), s = 0; s < o.length; s++) o[s] = arguments[s];
                        o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
                        var a = 0;
                        o[0] = o[0].replace(/%([a-zA-Z%])/g, function (n, r) {
                            if ("%%" === n) return n;
                            a++;
                            var i = t.formatters[r];
                            if ("function" == typeof i) {
                                var s = o[a];
                                n = i.call(e, s), o.splice(a, 1), a--
                            }
                            return n
                        }), t.formatArgs.call(e, o);
                        (n.log || t.log || void 0).apply(e, o)
                    }
                }
                return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" == typeof t.init && t.init(n), n
            }

            function o(e) {
                t.save(e), t.names = [], t.skips = [];
                for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
            }

            function s() {
                t.enable("")
            }

            function a(e) {
                var n, r;
                for (n = 0, r = t.skips.length; n < r; n++)
                    if (t.skips[n].test(e)) return !1;
                for (n = 0, r = t.names.length; n < r; n++)
                    if (t.names[n].test(e)) return !0;
                return !1
            }

            function c(e) {
                return e instanceof Error ? e.stack || e.message : e
            }
            t = e.exports = i.debug = i.default = i, t.coerce = c, t.disable = s, t.enable = o, t.enabled = a, t.humanize = n(6), t.names = [], t.skips = [], t.formatters = {};
            var u
        }, function (e, t) {
            function n(e) {
                if (e = String(e), !(e.length > 100)) {
                    var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var n = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * l;
                            case "days":
                            case "day":
                            case "d":
                                return n * u;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * c;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * a;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * s;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }

            function r(e) {
                return e >= u ? Math.round(e / u) + "d" : e >= c ? Math.round(e / c) + "h" : e >= a ? Math.round(e / a) + "m" : e >= s ? Math.round(e / s) + "s" : e + "ms"
            }

            function i(e) {
                return o(e, u, "day") || o(e, c, "hour") || o(e, a, "minute") || o(e, s, "second") || e + " ms"
            }

            function o(e, t, n) {
                if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
            }
            var s = 1e3,
                a = 60 * s,
                c = 60 * a,
                u = 24 * c,
                l = 365.25 * u;
            e.exports = function (e, t) {
                t = t || {};
                var o = void 0 === e ? "undefined" : _typeof(e);
                if ("string" === o && e.length > 0) return n(e);
                if ("number" === o && !1 === isNaN(e)) return t.long ? i(e) : r(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        }, function (e, t, n) {
            function r() { }

            function i(e) {
                var n = "" + e.type;
                return t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (n += e.attachments + "-"), e.nsp && "/" !== e.nsp && (n += e.nsp + ","), null != e.id && (n += e.id), null != e.data && (n += JSON.stringify(e.data)), f("encoded %j as %s", e, n), n
            }

            function o(e, t) {
                function n(e) {
                    var n = p.deconstructPacket(e),
                        r = i(n.packet),
                        o = n.buffers;
                    o.unshift(r), t(o)
                }
                p.removeBlobs(e, n)
            }

            function s() {
                this.reconstructor = null
            }

            function a(e) {
                var n = 0,
                    r = {
                        type: Number(e.charAt(0))
                    };
                if (null == t.types[r.type]) return l();
                if (t.BINARY_EVENT === r.type || t.BINARY_ACK === r.type) {
                    for (var i = "";
                        "-" !== e.charAt(++n) && (i += e.charAt(n), n != e.length););
                    if (i != Number(i) || "-" !== e.charAt(n)) throw new Error("Illegal attachments");
                    r.attachments = Number(i)
                }
                if ("/" === e.charAt(n + 1))
                    for (r.nsp = ""; ++n;) {
                        var o = e.charAt(n);
                        if ("," === o) break;
                        if (r.nsp += o, n === e.length) break
                    } else r.nsp = "/";
                var s = e.charAt(n + 1);
                if ("" !== s && Number(s) == s) {
                    for (r.id = ""; ++n;) {
                        var o = e.charAt(n);
                        if (null == o || Number(o) != o) {
                            --n;
                            break
                        }
                        if (r.id += e.charAt(n), n === e.length) break
                    }
                    r.id = Number(r.id)
                }
                return e.charAt(++n) && (r = c(r, e.substr(n))), f("decoded %s as %j", e, r), r
            }

            function c(e, t) {
                try {
                    e.data = JSON.parse(t)
                } catch (e) {
                    return l()
                }
                return e
            }

            function u(e) {
                this.reconPack = e, this.buffers = []
            }

            function l() {
                return {
                    type: t.ERROR,
                    data: "parser error"
                }
            }
            var f = n(3)("socket.io-parser"),
                h = n(8),
                d = n(9),
                p = n(11),
                g = n(12);
            t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = r, t.Decoder = s, r.prototype.encode = function (e, n) {
                if (e.type !== t.EVENT && e.type !== t.ACK || !d(e.data) || (e.type = e.type === t.EVENT ? t.BINARY_EVENT : t.BINARY_ACK), f("encoding packet %j", e), t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type) o(e, n);
                else {
                    n([i(e)])
                }
            }, h(s.prototype), s.prototype.add = function (e) {
                var n;
                if ("string" == typeof e) n = a(e), t.BINARY_EVENT === n.type || t.BINARY_ACK === n.type ? (this.reconstructor = new u(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
                else {
                    if (!g(e) && !e.base64) throw new Error("Unknown type: " + e);
                    if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
                    (n = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", n))
                }
            }, s.prototype.destroy = function () {
                this.reconstructor && this.reconstructor.finishedReconstruction()
            }, u.prototype.takeBinaryData = function (e) {
                if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
                    var t = p.reconstructPacket(this.reconPack, this.buffers);
                    return this.finishedReconstruction(), t
                }
                return null
            }, u.prototype.finishedReconstruction = function () {
                this.reconPack = null, this.buffers = []
            }
        }, function (e, t, n) {
            function r(e) {
                if (e) return i(e)
            }

            function i(e) {
                for (var t in r.prototype) e[t] = r.prototype[t];
                return e
            }
            e.exports = r, r.prototype.on = r.prototype.addEventListener = function (e, t) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
            }, r.prototype.once = function (e, t) {
                function n() {
                    this.off(e, n), t.apply(this, arguments)
                }
                return n.fn = t, this.on(e, n), this
            }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (e, t) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var n = this._callbacks["$" + e];
                if (!n) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + e], this;
                for (var r, i = 0; i < n.length; i++)
                    if ((r = n[i]) === t || r.fn === t) {
                        n.splice(i, 1);
                        break
                    } return this
            }, r.prototype.emit = function (e) {
                this._callbacks = this._callbacks || {};
                var t = [].slice.call(arguments, 1),
                    n = this._callbacks["$" + e];
                if (n) {
                    n = n.slice(0);
                    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
                }
                return this
            }, r.prototype.listeners = function (e) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
            }, r.prototype.hasListeners = function (e) {
                return !!this.listeners(e).length
            }
        }, function (e, t, n) {
            (function (t) {
                function r(e) {
                    if (!e || "object" != (void 0 === e ? "undefined" : _typeof(e))) return !1;
                    if (i(e)) {
                        for (var n = 0, o = e.length; n < o; n++)
                            if (r(e[n])) return !0;
                        return !1
                    }
                    if ("function" == typeof t.Buffer && t.Buffer.isBuffer && t.Buffer.isBuffer(e) || "function" == typeof t.ArrayBuffer && e instanceof ArrayBuffer || s && e instanceof Blob || a && e instanceof File) return !0;
                    if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return r(e.toJSON(), !0);
                    for (var c in e)
                        if (Object.prototype.hasOwnProperty.call(e, c) && r(e[c])) return !0;
                    return !1
                }
                var i = n(10),
                    o = Object.prototype.toString,
                    s = "function" == typeof t.Blob || "[object BlobConstructor]" === o.call(t.Blob),
                    a = "function" == typeof t.File || "[object FileConstructor]" === o.call(t.File);
                e.exports = r
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            var n = {}.toString;
            e.exports = Array.isArray || function (e) {
                return "[object Array]" == n.call(e)
            }
        }, function (e, t, n) {
            (function (e) {
                function r(e, t) {
                    if (!e) return e;
                    if (s(e)) {
                        var n = {
                            _placeholder: !0,
                            num: t.length
                        };
                        return t.push(e), n
                    }
                    if (o(e)) {
                        for (var i = new Array(e.length), a = 0; a < e.length; a++) i[a] = r(e[a], t);
                        return i
                    }
                    if ("object" == (void 0 === e ? "undefined" : _typeof(e)) && !(e instanceof Date)) {
                        var i = {};
                        for (var c in e) i[c] = r(e[c], t);
                        return i
                    }
                    return e
                }

                function i(e, t) {
                    if (!e) return e;
                    if (e && e._placeholder) return t[e.num];
                    if (o(e))
                        for (var n = 0; n < e.length; n++) e[n] = i(e[n], t);
                    else if ("object" == (void 0 === e ? "undefined" : _typeof(e)))
                        for (var r in e) e[r] = i(e[r], t);
                    return e
                }
                var o = n(10),
                    s = n(12),
                    a = Object.prototype.toString,
                    c = "function" == typeof e.Blob || "[object BlobConstructor]" === a.call(e.Blob),
                    u = "function" == typeof e.File || "[object FileConstructor]" === a.call(e.File);
                t.deconstructPacket = function (e) {
                    var t = [],
                        n = e.data,
                        i = e;
                    return i.data = r(n, t), i.attachments = t.length, {
                        packet: i,
                        buffers: t
                    }
                }, t.reconstructPacket = function (e, t) {
                    return e.data = i(e.data, t), e.attachments = void 0, e
                }, t.removeBlobs = function (e, t) {
                    function n(e, a, l) {
                        if (!e) return e;
                        if (c && e instanceof Blob || u && e instanceof File) {
                            r++;
                            var f = new FileReader;
                            f.onload = function () {
                                l ? l[a] = this.result : i = this.result, --r || t(i)
                            }, f.readAsArrayBuffer(e)
                        } else if (o(e))
                            for (var h = 0; h < e.length; h++) n(e[h], h, e);
                        else if ("object" == (void 0 === e ? "undefined" : _typeof(e)) && !s(e))
                            for (var d in e) n(e[d], d, e)
                    }
                    var r = 0,
                        i = e;
                    n(i), r || t(i)
                }
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            (function (t) {
                function n(e) {
                    return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
                }
                e.exports = n
            }).call(t, function () {
                return this
            }())
        }, function (e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(this instanceof r)) return new r(e, t);
                e && "object" === (void 0 === e ? "undefined" : i(e)) && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new d({
                    min: this.reconnectionDelay(),
                    max: this.reconnectionDelayMax(),
                    jitter: this.randomizationFactor()
                }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
                var n = t.parser || c;
                this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
            }
            var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : _typeof(e)
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
            },
                o = n(14),
                s = n(37),
                a = n(8),
                c = n(7),
                u = n(39),
                l = n(40),
                f = n(3)("socket.io-client:manager"),
                h = n(36),
                d = n(41),
                p = Object.prototype.hasOwnProperty;
            e.exports = r, r.prototype.emitAll = function () {
                this.emit.apply(this, arguments);
                for (var e in this.nsps) p.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
            }, r.prototype.updateSocketIds = function () {
                for (var e in this.nsps) p.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
            }, r.prototype.generateId = function (e) {
                return ("/" === e ? "" : e + "#") + this.engine.id
            }, a(r.prototype), r.prototype.reconnection = function (e) {
                return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
            }, r.prototype.reconnectionAttempts = function (e) {
                return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
            }, r.prototype.reconnectionDelay = function (e) {
                return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
            }, r.prototype.randomizationFactor = function (e) {
                return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
            }, r.prototype.reconnectionDelayMax = function (e) {
                return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
            }, r.prototype.timeout = function (e) {
                return arguments.length ? (this._timeout = e, this) : this._timeout
            }, r.prototype.maybeReconnectOnOpen = function () {
                !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
            }, r.prototype.open = r.prototype.connect = function (e, t) {
                if (f("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
                f("opening %s", this.uri), this.engine = o(this.uri, this.opts);
                var n = this.engine,
                    r = this;
                this.readyState = "opening", this.skipReconnect = !1;
                var i = u(n, "open", function () {
                    r.onopen(), e && e()
                }),
                    s = u(n, "error", function (t) {
                        if (f("connect_error"), r.cleanup(), r.readyState = "closed", r.emitAll("connect_error", t), e) {
                            var n = new Error("Connection error");
                            n.data = t, e(n)
                        } else r.maybeReconnectOnOpen()
                    });
                if (!1 !== this._timeout) {
                    var a = this._timeout;
                    f("connect attempt will timeout after %d", a);
                    var c = setTimeout(function () {
                        f("connect attempt timed out after %d", a), i.destroy(), n.close(), n.emit("error", "timeout"), r.emitAll("connect_timeout", a)
                    }, a);
                    this.subs.push({
                        destroy: function () {
                            clearTimeout(c)
                        }
                    })
                }
                return this.subs.push(i), this.subs.push(s), this
            }, r.prototype.onopen = function () {
                f("open"), this.cleanup(), this.readyState = "open", this.emit("open");
                var e = this.engine;
                this.subs.push(u(e, "data", l(this, "ondata"))), this.subs.push(u(e, "ping", l(this, "onping"))), this.subs.push(u(e, "pong", l(this, "onpong"))), this.subs.push(u(e, "error", l(this, "onerror"))), this.subs.push(u(e, "close", l(this, "onclose"))), this.subs.push(u(this.decoder, "decoded", l(this, "ondecoded")))
            }, r.prototype.onping = function () {
                this.lastPing = new Date, this.emitAll("ping")
            }, r.prototype.onpong = function () {
                this.emitAll("pong", new Date - this.lastPing)
            }, r.prototype.ondata = function (e) {
                this.decoder.add(e)
            }, r.prototype.ondecoded = function (e) {
                this.emit("packet", e)
            }, r.prototype.onerror = function (e) {
                f("error", e), this.emitAll("error", e)
            }, r.prototype.socket = function (e, t) {
                function n() {
                    ~h(i.connecting, r) || i.connecting.push(r)
                }
                var r = this.nsps[e];
                if (!r) {
                    r = new s(this, e, t), this.nsps[e] = r;
                    var i = this;
                    r.on("connecting", n), r.on("connect", function () {
                        r.id = i.generateId(e)
                    }), this.autoConnect && n()
                }
                return r
            }, r.prototype.destroy = function (e) {
                var t = h(this.connecting, e);
                ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
            }, r.prototype.packet = function (e) {
                f("writing packet %j", e);
                var t = this;
                e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function (n) {
                    for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
                    t.encoding = !1, t.processPacketQueue()
                }))
            }, r.prototype.processPacketQueue = function () {
                if (this.packetBuffer.length > 0 && !this.encoding) {
                    var e = this.packetBuffer.shift();
                    this.packet(e)
                }
            }, r.prototype.cleanup = function () {
                f("cleanup");
                for (var e = this.subs.length, t = 0; t < e; t++) {
                    this.subs.shift().destroy()
                }
                this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
            }, r.prototype.close = r.prototype.disconnect = function () {
                f("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
            }, r.prototype.onclose = function (e) {
                f("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
            }, r.prototype.reconnect = function () {
                if (this.reconnecting || this.skipReconnect) return this;
                var e = this;
                if (this.backoff.attempts >= this._reconnectionAttempts) f("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
                else {
                    var t = this.backoff.duration();
                    f("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
                    var n = setTimeout(function () {
                        e.skipReconnect || (f("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open(function (t) {
                            t ? (f("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (f("reconnect success"), e.onreconnect())
                        }))
                    }, t);
                    this.subs.push({
                        destroy: function () {
                            clearTimeout(n)
                        }
                    })
                }
            }, r.prototype.onreconnect = function () {
                var e = this.backoff.attempts;
                this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
            }
        }, function (e, t, n) {
            e.exports = n(15), e.exports.parser = n(22)
        }, function (e, t, n) {
            (function (t) {
                function r(e, n) {
                    if (!(this instanceof r)) return new r(e, n);
                    n = n || {}, e && "object" == (void 0 === e ? "undefined" : _typeof(e)) && (n = e, e = null), e ? (e = l(e), n.hostname = e.host, n.secure = "https" === e.protocol || "wss" === e.protocol, n.port = e.port, e.query && (n.query = e.query)) : n.host && (n.hostname = l(n.host).host), this.secure = null != n.secure ? n.secure : t.location && "https:" === location.protocol, n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.agent = n.agent || !1, this.hostname = n.hostname || (t.location ? location.hostname : "localhost"), this.port = n.port || (t.location && location.port ? location.port : this.secure ? 443 : 80), this.query = n.query || {}, "string" == typeof this.query && (this.query = f.decode(this.query)), this.upgrade = !1 !== n.upgrade, this.path = (n.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!n.forceJSONP, this.jsonp = !1 !== n.jsonp, this.forceBase64 = !!n.forceBase64, this.enablesXDR = !!n.enablesXDR, this.timestampParam = n.timestampParam || "t", this.timestampRequests = n.timestampRequests, this.transports = n.transports || ["polling", "websocket"], this.transportOptions = n.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = n.policyPort || 843, this.rememberUpgrade = n.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = n.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== n.perMessageDeflate && (n.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = n.pfx || null, this.key = n.key || null, this.passphrase = n.passphrase || null, this.cert = n.cert || null, this.ca = n.ca || null, this.ciphers = n.ciphers || null, this.rejectUnauthorized = void 0 === n.rejectUnauthorized || n.rejectUnauthorized, this.forceNode = !!n.forceNode;
                    var i = "object" == (void 0 === t ? "undefined" : _typeof(t)) && t;
                    i.global === i && (n.extraHeaders && Object.keys(n.extraHeaders).length > 0 && (this.extraHeaders = n.extraHeaders), n.localAddress && (this.localAddress = n.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
                }

                function i(e) {
                    var t = {};
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    return t
                }
                var o = n(16),
                    s = n(8),
                    a = n(3)("engine.io-client:socket"),
                    c = n(36),
                    u = n(22),
                    l = n(2),
                    f = n(30);
                e.exports = r, r.priorWebsocketSuccess = !1, s(r.prototype), r.protocol = u.protocol, r.Socket = r, r.Transport = n(21), r.transports = n(16), r.parser = n(22), r.prototype.createTransport = function (e) {
                    a('creating transport "%s"', e);
                    var t = i(this.query);
                    t.EIO = u.protocol, t.transport = e;
                    var n = this.transportOptions[e] || {};
                    return this.id && (t.sid = this.id), new o[e]({
                        query: t,
                        socket: this,
                        agent: n.agent || this.agent,
                        hostname: n.hostname || this.hostname,
                        port: n.port || this.port,
                        secure: n.secure || this.secure,
                        path: n.path || this.path,
                        forceJSONP: n.forceJSONP || this.forceJSONP,
                        jsonp: n.jsonp || this.jsonp,
                        forceBase64: n.forceBase64 || this.forceBase64,
                        enablesXDR: n.enablesXDR || this.enablesXDR,
                        timestampRequests: n.timestampRequests || this.timestampRequests,
                        timestampParam: n.timestampParam || this.timestampParam,
                        policyPort: n.policyPort || this.policyPort,
                        pfx: n.pfx || this.pfx,
                        key: n.key || this.key,
                        passphrase: n.passphrase || this.passphrase,
                        cert: n.cert || this.cert,
                        ca: n.ca || this.ca,
                        ciphers: n.ciphers || this.ciphers,
                        rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                        perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                        extraHeaders: n.extraHeaders || this.extraHeaders,
                        forceNode: n.forceNode || this.forceNode,
                        localAddress: n.localAddress || this.localAddress,
                        requestTimeout: n.requestTimeout || this.requestTimeout,
                        protocols: n.protocols || void 0
                    })
                }, r.prototype.open = function () {
                    var e;
                    if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
                    else {
                        if (0 === this.transports.length) {
                            var t = this;
                            return void setTimeout(function () {
                                t.emit("error", "No transports available")
                            }, 0)
                        }
                        e = this.transports[0]
                    }
                    this.readyState = "opening";
                    try {
                        e = this.createTransport(e)
                    } catch (e) {
                        return this.transports.shift(), void this.open()
                    }
                    e.open(), this.setTransport(e)
                }, r.prototype.setTransport = function (e) {
                    a("setting transport %s", e.name);
                    var t = this;
                    this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function () {
                        t.onDrain()
                    }).on("packet", function (e) {
                        t.onPacket(e)
                    }).on("error", function (e) {
                        t.onError(e)
                    }).on("close", function () {
                        t.onClose("transport close")
                    })
                }, r.prototype.probe = function (e) {
                    function t() {
                        if (h.onlyBinaryUpgrades) {
                            var t = !this.supportsBinary && h.transport.supportsBinary;
                            f = f || t
                        }
                        f || (a('probe transport "%s" opened', e), l.send([{
                            type: "ping",
                            data: "probe"
                        }]), l.once("packet", function (t) {
                            if (!f)
                                if ("pong" === t.type && "probe" === t.data) {
                                    if (a('probe transport "%s" pong', e), h.upgrading = !0, h.emit("upgrading", l), !l) return;
                                    r.priorWebsocketSuccess = "websocket" === l.name, a('pausing current transport "%s"', h.transport.name), h.transport.pause(function () {
                                        f || "closed" !== h.readyState && (a("changing transport and sending upgrade packet"), u(), h.setTransport(l), l.send([{
                                            type: "upgrade"
                                        }]), h.emit("upgrade", l), l = null, h.upgrading = !1, h.flush())
                                    })
                                } else {
                                    a('probe transport "%s" failed', e);
                                    var n = new Error("probe error");
                                    n.transport = l.name, h.emit("upgradeError", n)
                                }
                        }))
                    }

                    function n() {
                        f || (f = !0, u(), l.close(), l = null)
                    }

                    function i(t) {
                        var r = new Error("probe error: " + t);
                        r.transport = l.name, n(), a('probe transport "%s" failed because of error: %s', e, t), h.emit("upgradeError", r)
                    }

                    function o() {
                        i("transport closed")
                    }

                    function s() {
                        i("socket closed")
                    }

                    function c(e) {
                        l && e.name !== l.name && (a('"%s" works - aborting "%s"', e.name, l.name), n())
                    }

                    function u() {
                        l.removeListener("open", t), l.removeListener("error", i), l.removeListener("close", o), h.removeListener("close", s), h.removeListener("upgrading", c)
                    }
                    a('probing transport "%s"', e);
                    var l = this.createTransport(e, {
                        probe: 1
                    }),
                        f = !1,
                        h = this;
                    r.priorWebsocketSuccess = !1, l.once("open", t), l.once("error", i), l.once("close", o), this.once("close", s), this.once("upgrading", c), l.open()
                }, r.prototype.onOpen = function () {
                    if (a("socket open"), this.readyState = "open", r.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                        a("starting upgrade probes");
                        for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
                    }
                }, r.prototype.onPacket = function (e) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                        case "open":
                            this.onHandshake(JSON.parse(e.data));
                            break;
                        case "pong":
                            this.setPing(), this.emit("pong");
                            break;
                        case "error":
                            var t = new Error("server error");
                            t.code = e.data, this.onError(t);
                            break;
                        case "message":
                            this.emit("data", e.data), this.emit("message", e.data)
                    } else a('packet received with socket readyState "%s"', this.readyState)
                }, r.prototype.onHandshake = function (e) {
                    this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
                }, r.prototype.onHeartbeat = function (e) {
                    clearTimeout(this.pingTimeoutTimer);
                    var t = this;
                    t.pingTimeoutTimer = setTimeout(function () {
                        "closed" !== t.readyState && t.onClose("ping timeout")
                    }, e || t.pingInterval + t.pingTimeout)
                }, r.prototype.setPing = function () {
                    var e = this;
                    clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function () {
                        a("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
                    }, e.pingInterval)
                }, r.prototype.ping = function () {
                    var e = this;
                    this.sendPacket("ping", function () {
                        e.emit("ping")
                    })
                }, r.prototype.onDrain = function () {
                    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                }, r.prototype.flush = function () {
                    "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                }, r.prototype.write = r.prototype.send = function (e, t, n) {
                    return this.sendPacket("message", e, t, n), this
                }, r.prototype.sendPacket = function (e, t, n, r) {
                    if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                        n = n || {}, n.compress = !1 !== n.compress;
                        var i = {
                            type: e,
                            data: t,
                            options: n
                        };
                        this.emit("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush()
                    }
                }, r.prototype.close = function () {
                    function e() {
                        r.onClose("forced close"), a("socket closing - telling transport to close"), r.transport.close()
                    }

                    function t() {
                        r.removeListener("upgrade", t), r.removeListener("upgradeError", t), e()
                    }

                    function n() {
                        r.once("upgrade", t), r.once("upgradeError", t)
                    }
                    if ("opening" === this.readyState || "open" === this.readyState) {
                        this.readyState = "closing";
                        var r = this;
                        this.writeBuffer.length ? this.once("drain", function () {
                            this.upgrading ? n() : e()
                        }) : this.upgrading ? n() : e()
                    }
                    return this
                }, r.prototype.onError = function (e) {
                    a("socket error %j", e), r.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
                }, r.prototype.onClose = function (e, t) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                        a('socket close with reason: "%s"', e);
                        var n = this;
                        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), n.writeBuffer = [], n.prevBufferLen = 0
                    }
                }, r.prototype.filterUpgrades = function (e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) ~c(this.transports, e[n]) && t.push(e[n]);
                    return t
                }
            }).call(t, function () {
                return this
            }())
        }, function (e, t, n) {
            (function (e) {
                function r(t) {
                    var n = !1,
                        r = !1,
                        a = !1 !== t.jsonp;
                    if (e.location) {
                        var c = "https:" === location.protocol,
                            u = location.port;
                        u || (u = c ? 443 : 80), n = t.hostname !== location.hostname || u !== t.port, r = t.secure !== c
                    }
                    if (t.xdomain = n, t.xscheme = r, "open" in new i(t) && !t.forceJSONP) return new o(t);
                    if (!a) throw new Error("JSONP disabled");
                    return new s(t)
                }
                var i = n(17),
                    o = n(19),
                    s = n(33),
                    a = n(34);
                t.polling = r, t.websocket = a
            }).call(t, function () {
                return this
            }())
        }, function (e, t, n) {
            (function (t) {
                var r = n(18);
                e.exports = function (e) {
                    var n = e.xdomain,
                        i = e.xscheme,
                        o = e.enablesXDR;
                    try {
                        if ("undefined" != typeof XMLHttpRequest && (!n || r)) return new XMLHttpRequest
                    } catch (e) { }
                    try {
                        if ("undefined" != typeof XDomainRequest && !i && o) return new XDomainRequest
                    } catch (e) { }
                    if (!n) try {
                        return new (t[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (e) { }
                }
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            try {
                e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (t) {
                e.exports = !1
            }
        }, function (e, t, n) {
            (function (t) {
                function r() { }

                function i(e) {
                    if (c.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, t.location) {
                        var n = "https:" === location.protocol,
                            r = location.port;
                        r || (r = n ? 443 : 80), this.xd = e.hostname !== t.location.hostname || r !== e.port, this.xs = e.secure !== n
                    }
                }

                function o(e) {
                    this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
                }

                function s() {
                    for (var e in o.requests) o.requests.hasOwnProperty(e) && o.requests[e].abort()
                }
                var a = n(17),
                    c = n(20),
                    u = n(8),
                    l = n(31),
                    f = n(3)("engine.io-client:polling-xhr");
                e.exports = i, e.exports.Request = o, l(i, c), i.prototype.supportsBinary = !0, i.prototype.request = function (e) {
                    return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new o(e)
                }, i.prototype.doWrite = function (e, t) {
                    var n = "string" != typeof e && void 0 !== e,
                        r = this.request({
                            method: "POST",
                            data: e,
                            isBinary: n
                        }),
                        i = this;
                    r.on("success", t), r.on("error", function (e) {
                        i.onError("xhr post error", e)
                    }), this.sendXhr = r
                }, i.prototype.doPoll = function () {
                    f("xhr poll");
                    var e = this.request(),
                        t = this;
                    e.on("data", function (e) {
                        t.onData(e)
                    }), e.on("error", function (e) {
                        t.onError("xhr poll error", e)
                    }), this.pollXhr = e
                }, u(o.prototype), o.prototype.create = function () {
                    var e = {
                        agent: this.agent,
                        xdomain: this.xd,
                        xscheme: this.xs,
                        enablesXDR: this.enablesXDR
                    };
                    e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
                    var n = this.xhr = new a(e),
                        r = this;
                    try {
                        f("xhr open %s: %s", this.method, this.uri), n.open(this.method, this.uri, this.async);
                        try {
                            if (this.extraHeaders) {
                                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                                for (var i in this.extraHeaders) this.extraHeaders.hasOwnProperty(i) && n.setRequestHeader(i, this.extraHeaders[i])
                            }
                        } catch (e) { }
                        if ("POST" === this.method) try {
                            this.isBinary ? n.setRequestHeader("Content-type", "application/octet-stream") : n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                        } catch (e) { }
                        try {
                            n.setRequestHeader("Accept", "*/*")
                        } catch (e) { }
                        "withCredentials" in n && (n.withCredentials = !0), this.requestTimeout && (n.timeout = this.requestTimeout), this.hasXDR() ? (n.onload = function () {
                            r.onLoad()
                        }, n.onerror = function () {
                            r.onError(n.responseText)
                        }) : n.onreadystatechange = function () {
                            if (2 === n.readyState) {
                                var e;
                                try {
                                    e = n.getResponseHeader("Content-Type")
                                } catch (e) { }
                                "application/octet-stream" === e && (n.responseType = "arraybuffer")
                            }
                            4 === n.readyState && (200 === n.status || 1223 === n.status ? r.onLoad() : setTimeout(function () {
                                r.onError(n.status)
                            }, 0))
                        }, f("xhr data %s", this.data), n.send(this.data)
                    } catch (e) {
                        return void setTimeout(function () {
                            r.onError(e)
                        }, 0)
                    }
                    t.document && (this.index = o.requestsCount++ , o.requests[this.index] = this)
                }, o.prototype.onSuccess = function () {
                    this.emit("success"), this.cleanup()
                }, o.prototype.onData = function (e) {
                    this.emit("data", e), this.onSuccess()
                }, o.prototype.onError = function (e) {
                    this.emit("error", e), this.cleanup(!0)
                }, o.prototype.cleanup = function (e) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r, e) try {
                            this.xhr.abort()
                        } catch (e) { }
                        t.document && delete o.requests[this.index], this.xhr = null
                    }
                }, o.prototype.onLoad = function () {
                    var e;
                    try {
                        var t;
                        try {
                            t = this.xhr.getResponseHeader("Content-Type")
                        } catch (e) { }
                        e = "application/octet-stream" === t ? this.xhr.response || this.xhr.responseText : this.xhr.responseText
                    } catch (e) {
                        this.onError(e)
                    }
                    null != e && this.onData(e)
                }, o.prototype.hasXDR = function () {
                    return void 0 !== t.XDomainRequest && !this.xs && this.enablesXDR
                }, o.prototype.abort = function () {
                    this.cleanup()
                }, o.requestsCount = 0, o.requests = {}, t.document && (t.attachEvent ? t.attachEvent("onunload", s) : t.addEventListener && t.addEventListener("beforeunload", s, !1))
            }).call(t, function () {
                return this
            }())
        }, function (e, t, n) {
            function r(e) {
                var t = e && e.forceBase64;
                l && !t || (this.supportsBinary = !1), i.call(this, e)
            }
            var i = n(21),
                o = n(30),
                s = n(22),
                a = n(31),
                c = n(32),
                u = n(3)("engine.io-client:polling");
            e.exports = r;
            var l = function () {
                return null != new (n(17))({
                    xdomain: !1
                }).responseType
            }();
            a(r, i), r.prototype.name = "polling", r.prototype.doOpen = function () {
                this.poll()
            }, r.prototype.pause = function (e) {
                function t() {
                    u("paused"), n.readyState = "paused", e()
                }
                var n = this;
                if (this.readyState = "pausing", this.polling || !this.writable) {
                    var r = 0;
                    this.polling && (u("we are currently polling - waiting to pause"), r++ , this.once("pollComplete", function () {
                        u("pre-pause polling complete"), --r || t()
                    })), this.writable || (u("we are currently writing - waiting to pause"), r++ , this.once("drain", function () {
                        u("pre-pause writing complete"), --r || t()
                    }))
                } else t()
            }, r.prototype.poll = function () {
                u("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
            }, r.prototype.onData = function (e) {
                var t = this;
                u("polling got data %s", e);
                var n = function (e, n, r) {
                    return "opening" === t.readyState && t.onOpen(), "close" === e.type ? (t.onClose(), !1) : void t.onPacket(e)
                };
                s.decodePayload(e, this.socket.binaryType, n), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : u('ignoring poll - transport state "%s"', this.readyState))
            }, r.prototype.doClose = function () {
                function e() {
                    u("writing close packet"), t.write([{
                        type: "close"
                    }])
                }
                var t = this;
                "open" === this.readyState ? (u("transport open - closing"), e()) : (u("transport not open - deferring close"), this.once("open", e))
            }, r.prototype.write = function (e) {
                var t = this;
                this.writable = !1;
                var n = function () {
                    t.writable = !0, t.emit("drain")
                };
                s.encodePayload(e, this.supportsBinary, function (e) {
                    t.doWrite(e, n)
                })
            }, r.prototype.uri = function () {
                var e = this.query || {},
                    t = this.secure ? "https" : "http",
                    n = "";
                return !1 !== this.timestampRequests && (e[this.timestampParam] = c()), this.supportsBinary || e.sid || (e.b64 = 1), e = o.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
            }
        }, function (e, t, n) {
            function r(e) {
                this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
            }
            var i = n(22),
                o = n(8);
            e.exports = r, o(r.prototype), r.prototype.onError = function (e, t) {
                var n = new Error(e);
                return n.type = "TransportError", n.description = t, this.emit("error", n), this
            }, r.prototype.open = function () {
                return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
            }, r.prototype.close = function () {
                return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
            }, r.prototype.send = function (e) {
                if ("open" !== this.readyState) throw new Error("Transport not open");
                this.write(e)
            }, r.prototype.onOpen = function () {
                this.readyState = "open", this.writable = !0, this.emit("open")
            }, r.prototype.onData = function (e) {
                var t = i.decodePacket(e, this.socket.binaryType);
                this.onPacket(t)
            }, r.prototype.onPacket = function (e) {
                this.emit("packet", e)
            }, r.prototype.onClose = function () {
                this.readyState = "closed", this.emit("close")
            }
        }, function (e, t, n) {
            (function (e) {
                function r(e, n) {
                    return n("b" + t.packets[e.type] + e.data.data)
                }

                function i(e, n, r) {
                    if (!n) return t.encodeBase64Packet(e, r);
                    var i = e.data,
                        o = new Uint8Array(i),
                        s = new Uint8Array(1 + i.byteLength);
                    s[0] = y[e.type];
                    for (var a = 0; a < o.length; a++) s[a + 1] = o[a];
                    return r(s.buffer)
                }

                function o(e, n, r) {
                    if (!n) return t.encodeBase64Packet(e, r);
                    var i = new FileReader;
                    return i.onload = function () {
                        e.data = i.result, t.encodePacket(e, n, !0, r)
                    }, i.readAsArrayBuffer(e.data)
                }

                function s(e, n, r) {
                    if (!n) return t.encodeBase64Packet(e, r);
                    if (v) return o(e, n, r);
                    var i = new Uint8Array(1);
                    return i[0] = y[e.type], r(new _([i.buffer, e.data]))
                }

                function a(e) {
                    try {
                        e = p.decode(e, {
                            strict: !1
                        })
                    } catch (e) {
                        return !1
                    }
                    return e
                }

                function c(e, t, n) {
                    for (var r = new Array(e.length), i = d(e.length, n), o = 0; o < e.length; o++) ! function (e, n, i) {
                        t(n, function (t, n) {
                            r[e] = n, i(t, r)
                        })
                    }(o, e[o], i)
                }
                var u, l = n(23),
                    f = n(9),
                    h = n(24),
                    d = n(25),
                    p = n(26);
                e && e.ArrayBuffer && (u = n(28));
                var g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
                    m = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
                    v = g || m;
                t.protocol = 3;
                var y = t.packets = {
                    open: 0,
                    close: 1,
                    ping: 2,
                    pong: 3,
                    message: 4,
                    upgrade: 5,
                    noop: 6
                },
                    b = l(y),
                    w = {
                        type: "error",
                        data: "parser error"
                    },
                    _ = n(29);
                t.encodePacket = function (t, n, o, a) {
                    "function" == typeof n && (a = n, n = !1), "function" == typeof o && (a = o, o = null);
                    var c = void 0 === t.data ? void 0 : t.data.buffer || t.data;
                    if (e.ArrayBuffer && c instanceof ArrayBuffer) return i(t, n, a);
                    if (_ && c instanceof e.Blob) return s(t, n, a);
                    if (c && c.base64) return r(t, a);
                    var u = y[t.type];
                    return void 0 !== t.data && (u += o ? p.encode(String(t.data), {
                        strict: !1
                    }) : String(t.data)), a("" + u)
                }, t.encodeBase64Packet = function (n, r) {
                    var i = "b" + t.packets[n.type];
                    if (_ && n.data instanceof e.Blob) {
                        var o = new FileReader;
                        return o.onload = function () {
                            var e = o.result.split(",")[1];
                            r(i + e)
                        }, o.readAsDataURL(n.data)
                    }
                    var s;
                    try {
                        s = String.fromCharCode.apply(null, new Uint8Array(n.data))
                    } catch (e) {
                        for (var a = new Uint8Array(n.data), c = new Array(a.length), u = 0; u < a.length; u++) c[u] = a[u];
                        s = String.fromCharCode.apply(null, c)
                    }
                    return i += e.btoa(s), r(i)
                }, t.decodePacket = function (e, n, r) {
                    if (void 0 === e) return w;
                    if ("string" == typeof e) {
                        if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), n);
                        if (r && !1 === (e = a(e))) return w;
                        var i = e.charAt(0);
                        return Number(i) == i && b[i] ? e.length > 1 ? {
                            type: b[i],
                            data: e.substring(1)
                        } : {
                                type: b[i]
                            } : w
                    }
                    var o = new Uint8Array(e),
                        i = o[0],
                        s = h(e, 1);
                    return _ && "blob" === n && (s = new _([s])), {
                        type: b[i],
                        data: s
                    }
                }, t.decodeBase64Packet = function (e, t) {
                    var n = b[e.charAt(0)];
                    if (!u) return {
                        type: n,
                        data: {
                            base64: !0,
                            data: e.substr(1)
                        }
                    };
                    var r = u.decode(e.substr(1));
                    return "blob" === t && _ && (r = new _([r])), {
                        type: n,
                        data: r
                    }
                }, t.encodePayload = function (e, n, r) {
                    function i(e) {
                        return e.length + ":" + e
                    }

                    function o(e, r) {
                        t.encodePacket(e, !!s && n, !1, function (e) {
                            r(null, i(e))
                        })
                    }
                    "function" == typeof n && (r = n, n = null);
                    var s = f(e);
                    return n && s ? _ && !v ? t.encodePayloadAsBlob(e, r) : t.encodePayloadAsArrayBuffer(e, r) : e.length ? void c(e, o, function (e, t) {
                        return r(t.join(""))
                    }) : r("0:")
                }, t.decodePayload = function (e, n, r) {
                    if ("string" != typeof e) return t.decodePayloadAsBinary(e, n, r);
                    "function" == typeof n && (r = n, n = null);
                    var i;
                    if ("" === e) return r(w, 0, 1);
                    for (var o, s, a = "", c = 0, u = e.length; c < u; c++) {
                        var l = e.charAt(c);
                        if (":" === l) {
                            if ("" === a || a != (o = Number(a))) return r(w, 0, 1);
                            if (s = e.substr(c + 1, o), a != s.length) return r(w, 0, 1);
                            if (s.length) {
                                if (i = t.decodePacket(s, n, !1), w.type === i.type && w.data === i.data) return r(w, 0, 1);
                                if (!1 === r(i, c + o, u)) return
                            }
                            c += o, a = ""
                        } else a += l
                    }
                    return "" !== a ? r(w, 0, 1) : void 0
                }, t.encodePayloadAsArrayBuffer = function (e, n) {
                    function r(e, n) {
                        t.encodePacket(e, !0, !0, function (e) {
                            return n(null, e)
                        })
                    }
                    return e.length ? void c(e, r, function (e, t) {
                        var r = t.reduce(function (e, t) {
                            var n;
                            return n = "string" == typeof t ? t.length : t.byteLength, e + n.toString().length + n + 2
                        }, 0),
                            i = new Uint8Array(r),
                            o = 0;
                        return t.forEach(function (e) {
                            var t = "string" == typeof e,
                                n = e;
                            if (t) {
                                for (var r = new Uint8Array(e.length), s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
                                n = r.buffer
                            }
                            i[o++] = t ? 0 : 1;
                            for (var a = n.byteLength.toString(), s = 0; s < a.length; s++) i[o++] = parseInt(a[s]);
                            i[o++] = 255;
                            for (var r = new Uint8Array(n), s = 0; s < r.length; s++) i[o++] = r[s]
                        }), n(i.buffer)
                    }) : n(new ArrayBuffer(0))
                }, t.encodePayloadAsBlob = function (e, n) {
                    function r(e, n) {
                        t.encodePacket(e, !0, !0, function (e) {
                            var t = new Uint8Array(1);
                            if (t[0] = 1, "string" == typeof e) {
                                for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
                                e = r.buffer, t[0] = 0
                            }
                            for (var o = e instanceof ArrayBuffer ? e.byteLength : e.size, s = o.toString(), a = new Uint8Array(s.length + 1), i = 0; i < s.length; i++) a[i] = parseInt(s[i]);
                            if (a[s.length] = 255, _) {
                                var c = new _([t.buffer, a.buffer, e]);
                                n(null, c)
                            }
                        })
                    }
                    c(e, r, function (e, t) {
                        return n(new _(t))
                    })
                }, t.decodePayloadAsBinary = function (e, n, r) {
                    "function" == typeof n && (r = n, n = null);
                    for (var i = e, o = []; i.byteLength > 0;) {
                        for (var s = new Uint8Array(i), a = 0 === s[0], c = "", u = 1; 255 !== s[u]; u++) {
                            if (c.length > 310) return r(w, 0, 1);
                            c += s[u]
                        }
                        i = h(i, 2 + c.length), c = parseInt(c);
                        var l = h(i, 0, c);
                        if (a) try {
                            l = String.fromCharCode.apply(null, new Uint8Array(l))
                        } catch (e) {
                            var f = new Uint8Array(l);
                            l = "";
                            for (var u = 0; u < f.length; u++) l += String.fromCharCode(f[u])
                        }
                        o.push(l), i = h(i, c)
                    }
                    var d = o.length;
                    o.forEach(function (e, i) {
                        r(t.decodePacket(e, n, !0), i, d)
                    })
                }
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            e.exports = Object.keys || function (e) {
                var t = [],
                    n = Object.prototype.hasOwnProperty;
                for (var r in e) n.call(e, r) && t.push(r);
                return t
            }
        }, function (e, t) {
            e.exports = function (e, t, n) {
                var r = e.byteLength;
                if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
                if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || 0 === r) return new ArrayBuffer(0);
                for (var i = new Uint8Array(e), o = new Uint8Array(n - t), s = t, a = 0; s < n; s++ , a++) o[a] = i[s];
                return o.buffer
            }
        }, function (e, t) {
            function n(e, t, n) {
                function i(e, r) {
                    if (i.count <= 0) throw new Error("after called too many times");
                    --i.count, e ? (o = !0, t(e), t = n) : 0 !== i.count || o || t(null, r)
                }
                var o = !1;
                return n = n || r, i.count = e, 0 === e ? t() : i
            }

            function r() { }
            e.exports = n
        }, function (e, t, n) {
            var r;
            (function (e, i) {
                ! function (o) {
                    function s(e) {
                        for (var t, n, r = [], i = 0, o = e.length; i < o;) t = e.charCodeAt(i++), t >= 55296 && t <= 56319 && i < o ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
                        return r
                    }

                    function a(e) {
                        for (var t, n = e.length, r = -1, i = ""; ++r < n;) t = e[r], t > 65535 && (t -= 65536, i += b(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), i += b(t);
                        return i
                    }

                    function c(e, t) {
                        if (e >= 55296 && e <= 57343) {
                            if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
                            return !1
                        }
                        return !0
                    }

                    function u(e, t) {
                        return b(e >> t & 63 | 128)
                    }

                    function l(e, t) {
                        if (0 == (4294967168 & e)) return b(e);
                        var n = "";
                        return 0 == (4294965248 & e) ? n = b(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (c(e, t) || (e = 65533), n = b(e >> 12 & 15 | 224), n += u(e, 6)) : 0 == (4292870144 & e) && (n = b(e >> 18 & 7 | 240), n += u(e, 12), n += u(e, 6)), n += b(63 & e | 128)
                    }

                    function f(e, t) {
                        t = t || {};
                        for (var n, r = !1 !== t.strict, i = s(e), o = i.length, a = -1, c = ""; ++a < o;) n = i[a], c += l(n, r);
                        return c
                    }

                    function h() {
                        if (y >= v) throw Error("Invalid byte index");
                        var e = 255 & m[y];
                        if (y++ , 128 == (192 & e)) return 63 & e;
                        throw Error("Invalid continuation byte")
                    }

                    function d(e) {
                        var t, n, r, i, o;
                        if (y > v) throw Error("Invalid byte index");
                        if (y == v) return !1;
                        if (t = 255 & m[y], y++ , 0 == (128 & t)) return t;
                        if (192 == (224 & t)) {
                            if (n = h(), (o = (31 & t) << 6 | n) >= 128) return o;
                            throw Error("Invalid continuation byte")
                        }
                        if (224 == (240 & t)) {
                            if (n = h(), r = h(), (o = (15 & t) << 12 | n << 6 | r) >= 2048) return c(o, e) ? o : 65533;
                            throw Error("Invalid continuation byte")
                        }
                        if (240 == (248 & t) && (n = h(), r = h(), i = h(), (o = (7 & t) << 18 | n << 12 | r << 6 | i) >= 65536 && o <= 1114111)) return o;
                        throw Error("Invalid UTF-8 detected")
                    }

                    function p(e, t) {
                        t = t || {};
                        var n = !1 !== t.strict;
                        m = s(e), v = m.length, y = 0;
                        for (var r, i = []; !1 !== (r = d(n));) i.push(r);
                        return a(i)
                    }
                    var g = (void 0 === t || _typeof(t), "object" == (void 0 === e ? "undefined" : _typeof(e)) && e && e.exports, "object" == (void 0 === i ? "undefined" : _typeof(i)) && i);
                    var m, v, y, b = String.fromCharCode,
                        w = {
                            version: "2.1.2",
                            encode: f,
                            decode: p
                        };
                    void 0 !== (r = function () {
                        return w
                    }.call(t, n, t, e)) && (e.exports = r)
                }()
            }).call(t, n(27)(e), function () {
                return this
            }())
        }, function (e, t) {
            e.exports = function (e) {
                return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
            }
        }, function (e, t) {
            ! function () {
                "use strict";
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < e.length; r++) n[e.charCodeAt(r)] = r;
                t.encode = function (t) {
                    var n, r = new Uint8Array(t),
                        i = r.length,
                        o = "";
                    for (n = 0; n < i; n += 3) o += e[r[n] >> 2], o += e[(3 & r[n]) << 4 | r[n + 1] >> 4], o += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], o += e[63 & r[n + 2]];
                    return i % 3 == 2 ? o = o.substring(0, o.length - 1) + "=" : i % 3 == 1 && (o = o.substring(0, o.length - 2) + "=="), o
                }, t.decode = function (e) {
                    var t, r, i, o, s, a = .75 * e.length,
                        c = e.length,
                        u = 0;
                    "=" === e[e.length - 1] && (a-- , "=" === e[e.length - 2] && a--);
                    var l = new ArrayBuffer(a),
                        f = new Uint8Array(l);
                    for (t = 0; t < c; t += 4) r = n[e.charCodeAt(t)], i = n[e.charCodeAt(t + 1)], o = n[e.charCodeAt(t + 2)], s = n[e.charCodeAt(t + 3)], f[u++] = r << 2 | i >> 4, f[u++] = (15 & i) << 4 | o >> 2, f[u++] = (3 & o) << 6 | 63 & s;
                    return l
                }
            }()
        }, function (e, t) {
            (function (t) {
                function n(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (n.buffer instanceof ArrayBuffer) {
                            var r = n.buffer;
                            if (n.byteLength !== r.byteLength) {
                                var i = new Uint8Array(n.byteLength);
                                i.set(new Uint8Array(r, n.byteOffset, n.byteLength)), r = i.buffer
                            }
                            e[t] = r
                        }
                    }
                }

                function r(e, t) {
                    t = t || {};
                    var r = new o;
                    n(e);
                    for (var i = 0; i < e.length; i++) r.append(e[i]);
                    return t.type ? r.getBlob(t.type) : r.getBlob()
                }

                function i(e, t) {
                    return n(e), new Blob(e, t || {})
                }
                var o = t.BlobBuilder || t.WebKitBlobBuilder || t.MSBlobBuilder || t.MozBlobBuilder,
                    s = function () {
                        try {
                            return 2 === new Blob(["hi"]).size
                        } catch (e) {
                            return !1
                        }
                    }(),
                    a = s && function () {
                        try {
                            return 2 === new Blob([new Uint8Array([1, 2])]).size
                        } catch (e) {
                            return !1
                        }
                    }(),
                    c = o && o.prototype.append && o.prototype.getBlob;
                e.exports = function () {
                    return s ? a ? t.Blob : i : c ? r : void 0
                }()
            }).call(t, function () {
                return this
            }())
        }, function (e, t) {
            t.encode = function (e) {
                var t = "";
                for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t
            }, t.decode = function (e) {
                for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
                    var o = n[r].split("=");
                    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                }
                return t
            }
        }, function (e, t) {
            e.exports = function (e, t) {
                var n = function () { };
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            }
        }, function (e, t) {
            "use strict";

            function n(e) {
                var t = "";
                do {
                    t = s[e % a] + t, e = Math.floor(e / a)
                } while (e > 0);
                return t
            }

            function r(e) {
                var t = 0;
                for (l = 0; l < e.length; l++) t = t * a + c[e.charAt(l)];
                return t
            }

            function i() {
                var e = n(+new Date);
                return e !== o ? (u = 0, o = e) : e + "." + n(u++)
            }
            for (var o, s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, u = 0, l = 0; l < a; l++) c[s[l]] = l;
            i.encode = n, i.decode = r, e.exports = i
        }, function (e, t, n) {
            (function (t) {
                function r() { }

                function i(e) {
                    o.call(this, e), this.query = this.query || {}, a || (t.___eio || (t.___eio = []), a = t.___eio), this.index = a.length;
                    var n = this;
                    a.push(function (e) {
                        n.onData(e)
                    }), this.query.j = this.index, t.document && t.addEventListener && t.addEventListener("beforeunload", function () {
                        n.script && (n.script.onerror = r)
                    }, !1)
                }
                var o = n(20),
                    s = n(31);
                e.exports = i;
                var a, c = /\n/g,
                    u = /\\n/g;
                s(i, o), i.prototype.supportsBinary = !1, i.prototype.doClose = function () {
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this)
                }, i.prototype.doPoll = function () {
                    var e = this,
                        t = document.createElement("script");
                    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function (t) {
                        e.onError("jsonp poll error", t)
                    };
                    var n = document.getElementsByTagName("script")[0];
                    n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
                        var e = document.createElement("iframe");
                        document.body.appendChild(e), document.body.removeChild(e)
                    }, 100)
                }, i.prototype.doWrite = function (e, t) {
                    function n() {
                        r(), t()
                    }

                    function r() {
                        if (i.iframe) try {
                            i.form.removeChild(i.iframe)
                        } catch (e) {
                            i.onError("jsonp polling iframe removal error", e)
                        }
                        try {
                            var e = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                            o = document.createElement(e)
                        } catch (e) {
                            o = document.createElement("iframe"), o.name = i.iframeId, o.src = "javascript:0"
                        }
                        o.id = i.iframeId, i.form.appendChild(o), i.iframe = o
                    }
                    var i = this;
                    if (!this.form) {
                        var o, s = document.createElement("form"),
                            a = document.createElement("textarea"),
                            l = this.iframeId = "eio_iframe_" + this.index;
                        s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = l, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), a.name = "d", s.appendChild(a), document.body.appendChild(s), this.form = s, this.area = a
                    }
                    this.form.action = this.uri(), r(), e = e.replace(u, "\\\n"), this.area.value = e.replace(c, "\\n");
                    try {
                        this.form.submit()
                    } catch (e) { }
                    this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
                        "complete" === i.iframe.readyState && n()
                    } : this.iframe.onload = n
                }
            }).call(t, function () {
                return this
            }())
        }, function (e, t, n) {
            (function (t) {
                function r(e) {
                    e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = f && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (h = i), o.call(this, e)
                }
                var i, o = n(21),
                    s = n(22),
                    a = n(30),
                    c = n(31),
                    u = n(32),
                    l = n(3)("engine.io-client:websocket"),
                    f = t.WebSocket || t.MozWebSocket;
                if ("undefined" == typeof window) try {
                    i = n(35)
                } catch (e) { }
                var h = f;
                h || "undefined" != typeof window || (h = i), e.exports = r, c(r, o), r.prototype.name = "websocket", r.prototype.supportsBinary = !0, r.prototype.doOpen = function () {
                    if (this.check()) {
                        var e = this.uri(),
                            t = this.protocols,
                            n = {
                                agent: this.agent,
                                perMessageDeflate: this.perMessageDeflate
                            };
                        n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                        try {
                            this.ws = this.usingBrowserWebSocket ? t ? new h(e, t) : new h(e) : new h(e, t, n)
                        } catch (e) {
                            return this.emit("error", e)
                        }
                        void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
                    }
                }, r.prototype.addEventListeners = function () {
                    var e = this;
                    this.ws.onopen = function () {
                        e.onOpen()
                    }, this.ws.onclose = function () {
                        e.onClose()
                    }, this.ws.onmessage = function (t) {
                        e.onData(t.data)
                    }, this.ws.onerror = function (t) {
                        e.onError("websocket error", t)
                    }
                }, r.prototype.write = function (e) {
                    function n() {
                        r.emit("flush"), setTimeout(function () {
                            r.writable = !0, r.emit("drain")
                        }, 0)
                    }
                    var r = this;
                    this.writable = !1;
                    for (var i = e.length, o = 0, a = i; o < a; o++) ! function (e) {
                        s.encodePacket(e, r.supportsBinary, function (o) {
                            if (!r.usingBrowserWebSocket) {
                                var s = {};
                                if (e.options && (s.compress = e.options.compress), r.perMessageDeflate) {
                                    ("string" == typeof o ? t.Buffer.byteLength(o) : o.length) < r.perMessageDeflate.threshold && (s.compress = !1)
                                }
                            }
                            try {
                                r.usingBrowserWebSocket ? r.ws.send(o) : r.ws.send(o, s)
                            } catch (e) {
                                l("websocket closed before onclose event")
                            } --i || n()
                        })
                    }(e[o])
                }, r.prototype.onClose = function () {
                    o.prototype.onClose.call(this)
                }, r.prototype.doClose = function () {
                    void 0 !== this.ws && this.ws.close()
                }, r.prototype.uri = function () {
                    var e = this.query || {},
                        t = this.secure ? "wss" : "ws",
                        n = "";
                    return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = u()), this.supportsBinary || (e.b64 = 1), e = a.encode(e), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
                }, r.prototype.check = function () {
                    return !(!h || "__initialize" in h && this.name === r.prototype.name)
                }
            }).call(t, function () {
                return this
            }())
        }, function (e, t) { }, function (e, t) {
            var n = [].indexOf;
            e.exports = function (e, t) {
                if (n) return e.indexOf(t);
                for (var r = 0; r < e.length; ++r)
                    if (e[r] === t) return r;
                return -1
            }
        }, function (e, t, n) {
            "use strict";

            function r(e, t, n) {
                this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
            }
            var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
                return void 0 === e ? "undefined" : _typeof(e)
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
            },
                o = n(7),
                s = n(8),
                a = n(38),
                c = n(39),
                u = n(40),
                l = n(3)("socket.io-client:socket"),
                f = n(30);
            e.exports = r;
            var h = {
                connect: 1,
                connect_error: 1,
                connect_timeout: 1,
                connecting: 1,
                disconnect: 1,
                error: 1,
                reconnect: 1,
                reconnect_attempt: 1,
                reconnect_failed: 1,
                reconnect_error: 1,
                reconnecting: 1,
                ping: 1,
                pong: 1
            },
                d = s.prototype.emit;
            s(r.prototype), r.prototype.subEvents = function () {
                if (!this.subs) {
                    var e = this.io;
                    this.subs = [c(e, "open", u(this, "onopen")), c(e, "packet", u(this, "onpacket")), c(e, "close", u(this, "onclose"))]
                }
            }, r.prototype.open = r.prototype.connect = function () {
                return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
            }, r.prototype.send = function () {
                var e = a(arguments);
                return e.unshift("message"), this.emit.apply(this, e), this
            }, r.prototype.emit = function (e) {
                if (h.hasOwnProperty(e)) return d.apply(this, arguments), this;
                var t = a(arguments),
                    n = {
                        type: o.EVENT,
                        data: t
                    };
                return n.options = {}, n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), delete this.flags, this
            }, r.prototype.packet = function (e) {
                e.nsp = this.nsp, this.io.packet(e)
            }, r.prototype.onopen = function () {
                if (l("transport is open - connecting"), "/" !== this.nsp)
                    if (this.query) {
                        var e = "object" === i(this.query) ? f.encode(this.query) : this.query;
                        l("sending connect packet with query %s", e), this.packet({
                            type: o.CONNECT,
                            query: e
                        })
                    } else this.packet({
                        type: o.CONNECT
                    })
            }, r.prototype.onclose = function (e) {
                l("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
            }, r.prototype.onpacket = function (e) {
                if (e.nsp === this.nsp) switch (e.type) {
                    case o.CONNECT:
                        this.onconnect();
                        break;
                    case o.EVENT:
                    case o.BINARY_EVENT:
                        this.onevent(e);
                        break;
                    case o.ACK:
                    case o.BINARY_ACK:
                        this.onack(e);
                        break;
                    case o.DISCONNECT:
                        this.ondisconnect();
                        break;
                    case o.ERROR:
                        this.emit("error", e.data)
                }
            }, r.prototype.onevent = function (e) {
                var t = e.data || [];
                l("emitting event %j", t), null != e.id && (l("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? d.apply(this, t) : this.receiveBuffer.push(t)
            }, r.prototype.ack = function (e) {
                var t = this,
                    n = !1;
                return function () {
                    if (!n) {
                        n = !0;
                        var r = a(arguments);
                        l("sending ack %j", r), t.packet({
                            type: o.ACK,
                            id: e,
                            data: r
                        })
                    }
                }
            }, r.prototype.onack = function (e) {
                var t = this.acks[e.id];
                "function" == typeof t ? (l("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : l("bad ack %s", e.id)
            }, r.prototype.onconnect = function () {
                this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
            }, r.prototype.emitBuffered = function () {
                var e;
                for (e = 0; e < this.receiveBuffer.length; e++) d.apply(this, this.receiveBuffer[e]);
                for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
                this.sendBuffer = []
            }, r.prototype.ondisconnect = function () {
                l("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
            }, r.prototype.destroy = function () {
                if (this.subs) {
                    for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
                    this.subs = null
                }
                this.io.destroy(this)
            }, r.prototype.close = r.prototype.disconnect = function () {
                return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({
                    type: o.DISCONNECT
                })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
            }, r.prototype.compress = function (e) {
                return this.flags = this.flags || {}, this.flags.compress = e, this
            }
        }, function (e, t) {
            function n(e, t) {
                var n = [];
                t = t || 0;
                for (var r = t || 0; r < e.length; r++) n[r - t] = e[r];
                return n
            }
            e.exports = n
        }, function (e, t) {
            "use strict";

            function n(e, t, n) {
                return e.on(t, n), {
                    destroy: function () {
                        e.removeListener(t, n)
                    }
                }
            }
            e.exports = n
        }, function (e, t) {
            var n = [].slice;
            e.exports = function (e, t) {
                if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
                var r = n.call(arguments, 2);
                return function () {
                    return t.apply(e, r.concat(n.call(arguments)))
                }
            }
        }, function (e, t) {
            function n(e) {
                e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
            }
            e.exports = n, n.prototype.duration = function () {
                var e = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var t = Math.random(),
                        n = Math.floor(t * this.jitter * e);
                    e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                }
                return 0 | Math.min(e, this.max)
            }, n.prototype.reset = function () {
                this.attempts = 0
            }, n.prototype.setMin = function (e) {
                this.ms = e
            }, n.prototype.setMax = function (e) {
                this.max = e
            }, n.prototype.setJitter = function (e) {
                this.jitter = e
            }
        }])
    });
var $alertTask = {},
    $modalAlert = !1;

$(function () {
		$("#auth-login").submit(function (e) {
        e.preventDefault();
        var t = $(e.currentTarget),
            n = t.find("button"),
            r = t.find(".alert");
        toggleButton(n), sendRequest("POST", "auth/login", t.serializeArray(), function (e) {
            "success" == e.status ? (showAlert(r, "success", e.message), setTimeout(function () {
                location.href = "/" + $('input[name="redirect"]').val()
            }, 1e3)) : (toggleButton(n), showAlert(r, "danger", e.message))
        })
    }), window.onRegisterSubmit = function (e) {
        var t = $("#auth-register"),
            n = t.find("button"),
            r = t.find(".alert");
        t.find("#token").val(e), toggleButton(n), sendRequest("POST", "auth/register", t.serializeArray(), function (e) {
            "success" == e.status ? (showAlert(r, "success", e.message), setTimeout(function () {
                location.href = "/"
            }, 1e3)) : (toggleButton(n), grecaptcha.reset(), showAlert(r, "danger", e.message))
        })
    }, $("#reset-password").submit(function (e) {
        e.preventDefault();
        var t = $(e.currentTarget),
            n = t.find("button"),
            r = t.find(".alert");
        toggleButton(n), sendRequest("POST", "auth/reset-password", t.serializeArray(), function (e) {
            toggleButton(n), grecaptcha.reset(), "success" == e.status ? showAlert(r, "success", e.message) : showAlert(r, "danger", e.message)
        })
    }), $("#setting-password").submit(function (e) {
        e.preventDefault();
        var t = $(e.currentTarget),
            n = t.find("button"),
            r = t.find(".alert");
        toggleButton(n), sendRequest("POST", "auth/setting-password", t.serializeArray(), function (e) {
            "success" == e.status ? (showAlert(r, "success", e.message), setTimeout(function () {
                location.href = "/auth/login"
            }, 1e3)) : (toggleButton(n), showAlert(r, "danger", e.message))
        })
    });

});

    sendRequest = function (e, t, n, r) {
        "function" == typeof n && (r = n, n = {});
        var i = "/api/" + t + "?t=" + random(36);
        $.ajax({
            method: e,
            url: i,
            data: n,
            dataType: "json",
            beforeSend: function (e) {
                e.setRequestHeader("X-CSRF-TOKEN", $('meta[name="csrf-token"]').attr("content"))
            }
        }).done(function (e) {
            "function" == typeof r && r(e)
        }).fail(function (e, t, n) {
            try {
                var i = JSON.parse(e.responseText);
                void 0 !== i.status ? "function" == typeof r && r(i) : "function" == typeof r && r({
                    status: "fail",
                    message: "เธฃเธฐเธเธเนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธซเนเธเธฃเธดเธเธฒเธฃเนเธ”เนเนเธเธเธ“เธฐเธเธตเน"
                })
            } catch (e) {
                "function" == typeof r && r({
                    status: "fail",
                    message: "เธฃเธฐเธเธเนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธซเนเธเธฃเธดเธเธฒเธฃเนเธ”เนเนเธเธเธ“เธฐเธเธตเน"
                })
            }
        })
    },
    toggleButton = function (e) {
        e.attr("disabled") ? e.removeAttr("disabled") : e.attr("disabled", !0)
    },
    showAlert = function (e, t, n, r) {
        switch (t) {
            case "danger":
                t = 'error';
        }
		swal("เธเนเธญเธเธงเธฒเธกเธเธฒเธเธฃเธฐเธเธ",n,t);
        /*$alertTask.hasOwnProperty(e) && clearTimeout($alertTask[e]);
        var i = '<i class="fa fa-info-circle fa-lg"></i>';
        switch (t) {
            case "success":
                i = '<i class="fa fa-check-circle fa-lg"></i>';
                break;
            case "danger":
                i = '<i class="fa fa-warning fa-lg"></i>';
                break;
            case "loading":
                i = '<i class="fa fa-spinner fa-spin fa-lg"></i>', t = "primary"
        }
        e.removeClass("alert-primary alert-success alert-danger").html(i + " " + n).addClass("alert-" + t).show(), void 0 === r && (r = !0), r && ($alertTask[e] = setTimeout(function () {
            e.hide()
        }, 5e3)), $(document.body).animate({
            scrollTop: e.offset().top - 5
        }, 500)*/
    },
    LoadUserInfo = function () {
        sendRequest("GET", "user/info", function (e) {
            "success" == e.status ? ($(".balance").text(e.balance), $(".point").text(e.point), $(".bit").text(e.bit), $(".rewardpoint").text(e.rewardpoint)) : location.href = "/logout"
        })
    },
    random = function (e) {
        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", r = 0; r < e; r++) n += t.charAt(Math.floor(Math.random() * t.length));
        return n
    },
    randomMinMax = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    };
	
$('#login-facebook').click(function () {
    $(this).html('<i class="fa fa-spinner fa-spin"></i> เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธ”เนเธงเธข Facebook ');
});
$(document).ready(function(){
  $('#skillgame').on('click', function(e) {
  e.stopPropagation();
  if($('#skillgame_mui').css('display') == 'none'){
  var position_skillgame = $("#skillgame").position();
	 $('#randomgame_mui').css('display', 'none');
	 $('#skillgame_mui').css('top', position_skillgame.top);
	 $('#skillgame_mui').css('left', position_skillgame.left);
	 $('#skillgame_mui').css('display', 'block');
  }else{
	 $('#skillgame_mui').css('display', 'none');
  }
  });
  $('#randomgame').on('click', function(e) {
  e.stopPropagation();
  if($('#randomgame_mui').css('display') == 'none'){
  var position_randomgame = $("#randomgame").position();
	 $('#skillgame_mui').css('display', 'none');
	 $('#randomgame_mui').css('top', position_randomgame.top);
	 $('#randomgame_mui').css('left', position_randomgame.left);
	 $('#randomgame_mui').css('display', 'block');
  }else{
	 $('#randomgame_mui').css('display', 'none');
  }
  });
  $(document).on('click', function() {
	 $('#skillgame_mui').css('display', 'none');
	 $('#randomgame_mui').css('display', 'none');
  });
});
