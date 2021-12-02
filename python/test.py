import os

prg = './BBScraping.py'

#-----------------------------

def test_exists():
	"""
	Checks if the file exist
	"""

	assert os.path.isfile(prg)

def test_script():
	"""
	Check if the script works or not
	"""
	